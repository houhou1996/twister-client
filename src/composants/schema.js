import { arrayOf, schema } from 'normalizr';

export const comment = new schema.Entity('comment')
export const comments = { comments : [comment]}
