import { Pipe, PipeTransform } from '@angular/core';

// https://marklowg.medium.com/how-to-unit-test-a-custom-angular-pipe-744f20a97f5

@Pipe({
  name: 'forbidden-name'
})
export class ForbiddenNamePipe implements PipeTransform {

  transform(value: string, forbiddenName: string): string {
    if (value?.toLowerCase() === forbiddenName?.toLowerCase()) {
      return "[verbotener Name]";
    }
    return value;
  }
}
