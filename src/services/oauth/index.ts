// OAuth stub - functionality removed

export class OAuthService {
  static getInstance() {
    return new OAuthService()
  }
  
  async login() {
    throw new Error('OAuth login is not supported')
  }
  
  async logout() {
    throw new Error('OAuth logout is not supported')
  }
}
