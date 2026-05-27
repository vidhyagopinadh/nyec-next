// app/cohorts/store.ts
import { Store } from '@tanstack/store'

interface Cohort {
  name: string
  members: string[]
}

export const cohortStore = new Store<{ cohorts: Cohort[] }>({
  cohorts: [],
})
