import { Address } from './address.model';
import { Plan } from './plan.model';

export interface User {
  name?: string;
  email?: string;
  password?: string;
  date_of_birth?: string;
  gender?: string;
  address?: Address;
  accepts_shipments?: boolean;
  plan_type: Plan;
}
