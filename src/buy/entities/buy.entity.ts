// buy.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Buy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column()
  buyerName: string;

  @Column()
  buyerEmail: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'date' })
  transactionDate: Date;

  @Column()
  paymentMethod: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
