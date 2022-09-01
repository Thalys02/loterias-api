import { Module } from '@nestjs/common';
import { LoteriasController } from './loterias.controller';
import { LoteriaService } from './shared/loteria.service';

@Module({
    controllers:[LoteriasController],
    providers:[LoteriaService]
})
export class LoteriasModule {}
