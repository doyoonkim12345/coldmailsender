import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiControllerController } from './api-controller/api-controller.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, ApiControllerController, UserController],
  providers: [AppService],
})
export class AppModule {}
