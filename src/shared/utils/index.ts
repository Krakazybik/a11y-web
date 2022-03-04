import lodash from 'lodash';

export const getUniqueId = (prefix: string) => `${prefix}-${lodash.uniqueId()}`;
