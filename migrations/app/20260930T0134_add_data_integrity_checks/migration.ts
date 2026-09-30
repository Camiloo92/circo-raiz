#!/usr/bin/env -S node
import type {
  Contract as End,
  Contract as Start,
} from '../../snapshots/c35ea8a5f527fdd38c07b3511bb44eab1d38299656ff215d84bbab119260d191/contract';
import endContract from '../../snapshots/c35ea8a5f527fdd38c07b3511bb44eab1d38299656ff215d84bbab119260d191/contract.json' with { type: 'json' };
import startContract from '../../snapshots/c35ea8a5f527fdd38c07b3511bb44eab1d38299656ff215d84bbab119260d191/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, rawSql } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;

  override readonly endContractJson = endContract;

override get operations() {
  return [
    rawSql({
      id: "order-total-amount-check",
      label: 'Add CHECK constraint to "order.totalAmountInCents"',
      operationClass: "additive",
      target: { id: "postgres" },

      precheck: [],

      execute: [
        {
          description: 'Add CHECK constraint to "order.totalAmountInCents"',
          sql: `
            ALTER TABLE "public"."order"
            ADD CONSTRAINT "order_total_amount_non_negative"
            CHECK ("totalAmountInCents" >= 0)
          `,
        },
      ],

      postcheck: [],
    }),

    rawSql({
      id: "order-item-quantity-check",
      label: 'Add CHECK constraint to "orderItem.quantity"',
      operationClass: "additive",
      target: { id: "postgres" },

      precheck: [],

      execute: [
        {
          description: 'Add CHECK constraint to "orderItem.quantity"',
          sql: `
            ALTER TABLE "public"."orderItem"
            ADD CONSTRAINT "order_item_quantity_positive"
            CHECK ("quantity" > 0)
          `,
        },
      ],

      postcheck: [],
    }),

    rawSql({
      id: "order-item-unit-amount-check",
      label: 'Add CHECK constraint to "orderItem.unitAmountInCents"',
      operationClass: "additive",
      target: { id: "postgres" },

      precheck: [],

      execute: [
        {
          description: 'Add CHECK constraint to "orderItem.unitAmountInCents"',
          sql: `
            ALTER TABLE "public"."orderItem"
            ADD CONSTRAINT "order_item_unit_amount_non_negative"
            CHECK ("unitAmountInCents" >= 0)
          `,
        },
      ],

      postcheck: [],
    }),

    rawSql({
      id: "order-item-total-amount-check",
      label: 'Add CHECK constraint to "orderItem.totalAmountInCents"',
      operationClass: "additive",
      target: { id: "postgres" },

      precheck: [],

      execute: [
        {
          description: 'Add CHECK constraint to "orderItem.totalAmountInCents"',
          sql: `
            ALTER TABLE "public"."orderItem"
            ADD CONSTRAINT "order_item_total_amount_non_negative"
            CHECK ("totalAmountInCents" >= 0)
          `,
        },
      ],

      postcheck: [],
    }),

    rawSql({
      id: "payment-paid-amount-check",
      label: 'Add CHECK constraint to "payment.paidAmountInCents"',
      operationClass: "additive",
      target: { id: "postgres" },

      precheck: [],

      execute: [
        {
          description: 'Add CHECK constraint to "payment.paidAmountInCents"',
          sql: `
            ALTER TABLE "public"."payment"
            ADD CONSTRAINT "payment_paid_amount_non_negative"
            CHECK ("paidAmountInCents" >= 0)
          `,
        },
      ],

      postcheck: [],
    }),
  ];
}
}

MigrationCLI.run(import.meta.url, M);