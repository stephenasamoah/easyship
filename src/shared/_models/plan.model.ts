const enum Plans {
  Monthly = 'monthly',
  Annually = 'annually'
}

export interface Plan {
  monthly?: Plans.Monthly;
  annually?: Plans.Annually;
}
