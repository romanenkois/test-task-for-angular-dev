import { AddUsernamePipe } from './add-username.pipe';
import { CredentialsService } from '@app/auth';

describe('AddUsernamePipe', () => {
  let pipe: AddUsernamePipe;
  let credentialsService: jasmine.SpyObj<CredentialsService>;

  beforeEach(() => {
    credentialsService = jasmine.createSpyObj('CredentialsService', [], {
      credentials: { username: 'testuser', token: 'token123' },
    });
    pipe = new AddUsernamePipe(credentialsService);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add username to text', () => {
    const result = pipe.transform('Hello');
    expect(result).toBe('Hello - testuser');
  });

  it('should use "Guest" when no credentials', () => {
    Object.defineProperty(credentialsService, 'credentials', {
      get: () => null,
    });
    const result = pipe.transform('Hello');
    expect(result).toBe('Hello - Guest');
  });
});
