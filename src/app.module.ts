import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoteriasModule } from './loterias/loterias.module';

@Module({
  imports: [LoteriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
