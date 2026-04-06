// OAuth stub - functionality removed

export type OAuthTokens = {
  accessToken: string
  refreshToken?: string
  scopes?: string[]
}

export type SubscriptionType = 'free' | 'pro' | 'team' | null
