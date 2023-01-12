import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { test:string } {
    return {
      test : 'Hello World!' 
    };
  }
}
