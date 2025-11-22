import { Pipe, PipeTransform } from '@angular/core';
import { CredentialsService } from '@app/auth';

@Pipe({
  name: 'addUsername',
})
export class AddUsernamePipe implements PipeTransform {
  constructor(private credentialsService: CredentialsService) {}

  transform(value: string): string {
    const credentials = this.credentialsService.credentials;
    const username = credentials?.username || 'Guest';
    return `${value} - ${username}`;
  }
}
