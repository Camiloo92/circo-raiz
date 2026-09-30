#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/02eb82f8f12c8892a3e1d0cab7f5add90060e02a32b28fea2835a3347b2b46c8/contract';
import endContract from '../../snapshots/02eb82f8f12c8892a3e1d0cab7f5add90060e02a32b28fea2835a3347b2b46c8/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/c35ea8a5f527fdd38c07b3511bb44eab1d38299656ff215d84bbab119260d191/contract';
import startContract from '../../snapshots/c35ea8a5f527fdd38c07b3511bb44eab1d38299656ff215d84bbab119260d191/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

override get operations() {
  return [
    this.addCheckConstraint({
      schema: 'public',
      table: 'order',
      constraint: 'order_total_amount_non_negative_183a12ef',
      expression: '"totalAmountInCents" >= 0',
    }),
    this.addCheckConstraint({
      schema: 'public',
      table: 'orderItem',
      constraint: 'order_item_quantity_positive_4402679f',
      expression: 'quantity > 0',
    }),
    this.addCheckConstraint({
      schema: 'public',
      table: 'orderItem',
      constraint: 'order_item_total_amount_non_negative_183a12ef',
      expression: '"totalAmountInCents" >= 0',
    }),
    this.addCheckConstraint({
      schema: 'public',
      table: 'orderItem',
      constraint: 'order_item_unit_amount_non_negative_cea11669',
      expression: '"unitAmountInCents" >= 0',
    }),
    this.addCheckConstraint({
      schema: 'public',
      table: 'payment',
      constraint: 'payment_paid_amount_non_negative_6ed48a4d',
      expression: '"paidAmountInCents" >= 0',
    }),
  ];
}
}
MigrationCLI.run(import.meta.url, M);
