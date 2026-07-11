import React from 'react'
import css from './VoteOptions.module.css'
import type { VoteType } from '../../types/votes'

export interface VoteOptionsProps {
  onVote: (type: VoteType) => void
  onReset: () => void
  canReset?: boolean
}

function VoteOptions({ onVote, onReset, canReset = true }: VoteOptionsProps): JSX.Element {
  return (
    <div className={css.container}>
      <button type="button" className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button type="button" className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button type="button" className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  )
}

export default VoteOptions
