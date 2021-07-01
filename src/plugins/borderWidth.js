import { asLength } from '../util/pluginUtils'
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function () {
  return function (helpers) {
    if (helpers.config('mode') === 'jit') {
      createUtilityPlugin(
        'borderWidth',
        [
          ['border', [['@defaults border-width', {}], 'border-width']],
          [
            ['border-t', [['@defaults border-width', {}], 'border-top-width']],
            ['border-r', [['@defaults border-width', {}], 'border-right-width']],
            ['border-b', [['@defaults border-width', {}], 'border-bottom-width']],
            ['border-l', [['@defaults border-width', {}], 'border-left-width']],
          ],
        ],
        { resolveArbitraryValue: asLength }
      )(helpers)
    } else {
      createUtilityPlugin(
        'borderWidth',
        [
          ['border', ['border-width']],
          [
            ['border-t', ['border-top-width']],
            ['border-r', ['border-right-width']],
            ['border-b', ['border-bottom-width']],
            ['border-l', ['border-left-width']],
          ],
        ],
        { resolveArbitraryValue: asLength }
      )(helpers)
    }
  }
}
