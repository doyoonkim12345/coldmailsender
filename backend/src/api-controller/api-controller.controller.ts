import { Body, Controller, Header, Post, Response } from '@nestjs/common';

@Controller({ host: 'api.localhost' })
export class ApiControllerController {
  @Post()
  test(@Body() body) {
    console.log(body);
    return 'good';
  }
}
