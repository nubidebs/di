import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // Accessible only inside the module
  exports: [PowerService], // This is to make the module accessible by other modules
})
export class PowerModule {}
