import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

// Exact numbers must not be justified by a different number containing them.
export function containsWrittenLiteral(text, literal) {
  if (!literal) return false;
  const escaped = literal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const boundary = /\d/.test(literal) ? '[\\p{L}\\p{N}_.]' : '[\\p{L}\\p{N}_]';
  return new RegExp('(?<!' + boundary + ')' + escaped + '(?!' + boundary + ')', 'u').test(text);
}

assert.equal(containsWrittenLiteral('28px', '8px'), false);
assert.equal(containsWrittenLiteral('20px', '2px'), false);
assert.equal(containsWrittenLiteral('spacing.24', '2'), false);
assert.equal(containsWrittenLiteral('4px corner radius', '4px'), true);
assert.equal(containsWrittenLiteral('Opacity (Inactive): 38%', '38%'), true);
assert.equal(containsWrittenLiteral('Height 40px / 32px', '32px'), true);

const registry = JSON.parse(readFileSync(new URL('../../packages/figma-ds/evidence/written-values.json', import.meta.url)));
const failures = [];
for (const rule of registry.rules) {
  for (const ref of rule.sourceCellRefs ?? []) {
    for (const cell of ref.cells ?? []) {
      if (!containsWrittenLiteral(cell.text, ref.writtenValue)) {
        failures.push({selector: rule.selector, value: ref.writtenValue, cell: cell.cellId, text: cell.text});
      }
    }
  }
}
assert.deepEqual(failures, [], 'Some citations match substrings rather than the actual written numeric literal');
console.log(`PASS: numeric literal boundaries in ${registry.rules.length} source-backed rules. This does not verify semantic row applicability.`);
