export type UserPersonaType = 'internal_users' | 'users_clients' | 'users_brokers' | 'users_underwriters' | 'users_insurers' | 'users_leads';

export interface UserPersona {
  type: UserPersonaType;
  typeName: string;
  url: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  organization?: string;
  phone?: string;
}

const baseUrl = 'https://newdev.anovamarine.com/revised/admin';
const now = Date.now();

export const userPersonas: UserPersona[] = [
  {
    type: 'internal_users',
    typeName: 'Internal Users',
    url: `${baseUrl}/internal_users`,
    firstName: 'Alan',
    lastName: 'Turner',
    email: `internal.user+${now}@anova.com`,
    status: 'Active',
    organization: 'Anova Operations',
    phone: '555-0101',
  },
  {
    type: 'users_clients',
    typeName: 'Clients',
    url: `${baseUrl}/users_clients`,
    firstName: 'Sonia',
    lastName: 'Patel',
    email: `client.user+${now}@anova.com`,
    status: 'Active',
    organization: 'Global Client Ltd',
    phone: '555-0202',
  },
  {
    type: 'users_brokers',
    typeName: 'Brokers',
    url: `${baseUrl}/users_brokers`,
    firstName: 'Mike',
    lastName: 'Ford',
    email: `broker.user+${now}@anova.com`,
    status: 'Active',
    organization: 'Brokerage One',
    phone: '555-0303',
  },
  {
    type: 'users_underwriters',
    typeName: 'Underwriters',
    url: `${baseUrl}/users_underwriters`,
    firstName: 'Rachel',
    lastName: 'Lee',
    email: `underwriter.user+${now}@anova.com`,
    status: 'Active',
    organization: 'UnderwritePro',
    phone: '555-0404',
  },
  {
    type: 'users_insurers',
    typeName: 'Insurers',
    url: `${baseUrl}/users_insurers`,
    firstName: 'Samuel',
    lastName: 'Green',
    email: `insurer.user+${now}@anova.com`,
    status: 'Inactive',
    organization: 'InsureTrust',
    phone: '555-0505',
  },
  {
    type: 'users_leads',
    typeName: 'Leads',
    url: `${baseUrl}/users_leads`,
    firstName: 'Nina',
    lastName: 'Jones',
    email: `lead.user+${now}@anova.com`,
    status: 'Active',
    organization: 'LeadFlow',
    phone: '555-0606',
  },
];
