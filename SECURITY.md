# Security Policy

## Supported Versions

We take security seriously and are committed to ensuring the safety of ChainQuery AI users. The following versions are currently supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within ChainQuery AI, please send an email to [security@chainquery-ai.com](mailto:security@chainquery-ai.com). All security vulnerabilities will be promptly addressed.

### What to Include

When reporting a security issue, please include the following information:

- **Description**: A clear description of the vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Impact**: Potential impact of the vulnerability
- **Environment**: Operating system, Node.js version, and other relevant details
- **Proof of Concept**: Code or screenshots demonstrating the issue (if applicable)

### Response Timeline

- **Initial Response**: Within 24 hours
- **Investigation**: Within 72 hours
- **Fix Timeline**: Critical issues within 7 days, others within 30 days
- **Public Disclosure**: After fix is deployed and users have time to update

## Security Best Practices

### For Developers

When contributing to ChainQuery AI, please follow these security guidelines:

1. **Input Validation**
   - Always validate and sanitize user input
   - Use parameterized queries to prevent injection attacks
   - Implement proper error handling to avoid information leakage

2. **Authentication & Authorization**
   - Secure API endpoints with proper authentication
   - Implement rate limiting to prevent abuse
   - Use HTTPS for all communication in production

3. **Dependencies**
   - Keep all dependencies up to date
   - Regularly audit packages for vulnerabilities
   - Use `pnpm audit` to check for security issues

4. **Environment Variables**
   - Never commit sensitive data like API keys
   - Use environment variables for configuration
   - Validate environment variables on startup

### For Users

To use ChainQuery AI securely:

1. **API Keys**
   - Keep your OpenAI API key secure
   - Use environment variables, never hardcode keys
   - Regularly rotate API keys

2. **Network Security**
   - Use HTTPS in production environments
   - Implement proper CORS policies
   - Monitor API usage for unusual patterns

3. **Updates**
   - Keep ChainQuery AI updated to the latest version
   - Monitor security advisories
   - Test updates in a staging environment first

## Known Security Considerations

### Data Processing
- ChainQuery AI processes user queries through OpenAI's API
- No sensitive blockchain data is stored permanently
- All API communications are logged for debugging purposes

### Third-Party Services
- **OpenAI API**: Queries are sent to OpenAI for processing
- **Dependencies**: Regular security audits are performed on all packages

## Security Features

### Input Sanitization
- All user input is validated and sanitized
- Maximum query length limits are enforced
- Potentially harmful patterns are detected and blocked

### Rate Limiting
- API endpoints implement rate limiting
- Protection against DDoS attacks
- User session management

### Error Handling
- Secure error messages that don't leak sensitive information
- Comprehensive logging for security monitoring
- Graceful degradation for service failures

## Vulnerability Disclosure Policy

### Responsible Disclosure

We encourage responsible disclosure of security vulnerabilities. We commit to:

1. **Acknowledgment**: Acknowledge receipt of your vulnerability report within 24 hours
2. **Communication**: Keep you informed about the progress of fixing the issue
3. **Credit**: Publicly credit you for the discovery (if desired)
4. **Reward**: Consider security bounties for significant vulnerabilities

### Public Disclosure

- Security issues will be disclosed publicly only after fixes are available
- Users will be given reasonable time to update before full disclosure
- Security advisories will be published on GitHub Security Advisories

## Security Contact

For security-related questions or concerns:

- **Email**: [security@chainquery-ai.com](mailto:security@chainquery-ai.com)
- **PGP Key**: Available upon request
- **Response Time**: Within 24 hours

## Compliance

ChainQuery AI is designed to comply with:

- **OWASP Top 10**: Protection against common web application vulnerabilities
- **GDPR**: Data protection and privacy regulations
- **SOC 2**: Security and availability standards

## Security Updates

Stay informed about security updates:

- **GitHub Releases**: All security updates are tagged and documented
- **Security Advisories**: Critical issues are published as GitHub Security Advisories
- **Changelog**: Security fixes are clearly marked in the changelog

---

**Last Updated**: September 23, 2025

For questions about this security policy, please contact [security@chainquery-ai.com](mailto:security@chainquery-ai.com).
