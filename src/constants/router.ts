export const AppRouter = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  PASSWORD_SENT_TO_EMAIL: 'PASSWORD_SENT_TO_EMAIL',
  MAIN: 'MAIN',
  HOME: 'HOME',
  PENALIZE: 'PENALIZE',
  PENALIZE_FILTER: 'PENALIZE_FILTER',
  VIEW_PENALIZE_INFO: 'VIEW_PENALIZE_INFO',
  ADMINISTRATIVE_PENALIZE_VIOLATION_DETAIL:
    'ADMINISTRATIVE_PENALIZE_VIOLATION_DETAIL',
  HANDLE: 'HANDLE',
  HANDLE_FILTER: 'HANDLE_FILTER',
  SUGGESTION_PROFILE_DETAIL: 'SUGGESTION_PROFILE_DETAIL',
  VIEW_HANDLE_INFO: 'VIEW_HANDLE_INFO',
  ADMINISTRATIVE_HANDLING_VIOLATION_DETAIL:
    'ADMINISTRATIVE_HANDLING_VIOLATION_DETAIL',
  SEARCH: 'SEARCH',
  SEARCH_VIOLATION_INFO: 'SEARCH_VIOLATION_INFO',
  VIOLATION_INFO_FILTER: 'VIOLATION_INFO_FILTER',
  DOCUMENT_LIST: 'DOCUMENT_LIST',
  DOCUMENT_FILTER: 'DOCUMENT_FILTER',
  VIEW_DOCUMENT: 'VIEW_DOCUMENT',
  CRIMINAL_HANDLING_VIOLATION_LIST: 'CRIMINAL_HANDLING_VIOLATION_LIST',
  CRIMINAL_HANDLING_VIOLATION_FILTER: 'CRIMINAL_HANDLING_VIOLATION_FILTER',
  VIEW_CRIMINAL_HANDLING_VIOLATION: 'VIEW_CRIMINAL_HANDLING_VIOLATION',
  ACCOUNT: 'ACCOUNT',
  NOTIFICATIONS: 'NOTIFICATIONS',
  NOTIFICATION_DETAIL: 'NOTIFICATION_DETAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  PASSWORD_UPDATED: 'PASSWORD_UPDATED',
} as const;

export const AccountRouter = {
  ACCOUNT_INFO: 'ACCOUNT_INFO',
  UPDATE_ACCOUNT_INFO: 'UPDATE_ACCOUNT_INFO',
} as const;
