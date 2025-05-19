
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model BookmakerEntry
 * 
 */
export type BookmakerEntry = $Result.DefaultSelection<Prisma.$BookmakerEntryPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Outcome
 * 
 */
export type Outcome = $Result.DefaultSelection<Prisma.$OutcomePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sports
 * const sports = await prisma.sport.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sports
   * const sports = await prisma.sport.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmakerEntry`: Exposes CRUD operations for the **BookmakerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmakerEntries
    * const bookmakerEntries = await prisma.bookmakerEntry.findMany()
    * ```
    */
  get bookmakerEntry(): Prisma.BookmakerEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outcome`: Exposes CRUD operations for the **Outcome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outcomes
    * const outcomes = await prisma.outcome.findMany()
    * ```
    */
  get outcome(): Prisma.OutcomeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sport: 'Sport',
    Event: 'Event',
    BookmakerEntry: 'BookmakerEntry',
    Market: 'Market',
    Outcome: 'Outcome'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sport" | "event" | "bookmakerEntry" | "market" | "outcome"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      BookmakerEntry: {
        payload: Prisma.$BookmakerEntryPayload<ExtArgs>
        fields: Prisma.BookmakerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmakerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmakerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          findFirst: {
            args: Prisma.BookmakerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmakerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          findMany: {
            args: Prisma.BookmakerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>[]
          }
          create: {
            args: Prisma.BookmakerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          createMany: {
            args: Prisma.BookmakerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmakerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>[]
          }
          delete: {
            args: Prisma.BookmakerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          update: {
            args: Prisma.BookmakerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          deleteMany: {
            args: Prisma.BookmakerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmakerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmakerEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>[]
          }
          upsert: {
            args: Prisma.BookmakerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmakerEntryPayload>
          }
          aggregate: {
            args: Prisma.BookmakerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmakerEntry>
          }
          groupBy: {
            args: Prisma.BookmakerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmakerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmakerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<BookmakerEntryCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Outcome: {
        payload: Prisma.$OutcomePayload<ExtArgs>
        fields: Prisma.OutcomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutcomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutcomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findFirst: {
            args: Prisma.OutcomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutcomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findMany: {
            args: Prisma.OutcomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          create: {
            args: Prisma.OutcomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          createMany: {
            args: Prisma.OutcomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutcomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          delete: {
            args: Prisma.OutcomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          update: {
            args: Prisma.OutcomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          deleteMany: {
            args: Prisma.OutcomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutcomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutcomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          upsert: {
            args: Prisma.OutcomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          aggregate: {
            args: Prisma.OutcomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutcome>
          }
          groupBy: {
            args: Prisma.OutcomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutcomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutcomeCountArgs<ExtArgs>
            result: $Utils.Optional<OutcomeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sport?: SportOmit
    event?: EventOmit
    bookmakerEntry?: BookmakerEntryOmit
    market?: MarketOmit
    outcome?: OutcomeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    events: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | SportCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    bookmakerEntries: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmakerEntries?: boolean | EventCountOutputTypeCountBookmakerEntriesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountBookmakerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmakerEntryWhereInput
  }


  /**
   * Count Type BookmakerEntryCountOutputType
   */

  export type BookmakerEntryCountOutputType = {
    markets: number
  }

  export type BookmakerEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | BookmakerEntryCountOutputTypeCountMarketsArgs
  }

  // Custom InputTypes
  /**
   * BookmakerEntryCountOutputType without action
   */
  export type BookmakerEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntryCountOutputType
     */
    select?: BookmakerEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookmakerEntryCountOutputType without action
   */
  export type BookmakerEntryCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    outcomes: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcomes?: boolean | MarketCountOutputTypeCountOutcomesArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportMinAggregateOutputType = {
    id: string | null
    key: string | null
    active: boolean | null
    group: string | null
    description: string | null
    title: string | null
    hasOutrights: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SportMaxAggregateOutputType = {
    id: string | null
    key: string | null
    active: boolean | null
    group: string | null
    description: string | null
    title: string | null
    hasOutrights: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    key: number
    active: number
    group: number
    description: number
    title: number
    hasOutrights: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SportMinAggregateInputType = {
    id?: true
    key?: true
    active?: true
    group?: true
    description?: true
    title?: true
    hasOutrights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    key?: true
    active?: true
    group?: true
    description?: true
    title?: true
    hasOutrights?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    key?: true
    active?: true
    group?: true
    description?: true
    title?: true
    hasOutrights?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt: Date
    updatedAt: Date
    _count: SportCountAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    active?: boolean
    group?: boolean
    description?: boolean
    title?: boolean
    hasOutrights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Sport$eventsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    active?: boolean
    group?: boolean
    description?: boolean
    title?: boolean
    hasOutrights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    active?: boolean
    group?: boolean
    description?: boolean
    title?: boolean
    hasOutrights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id?: boolean
    key?: boolean
    active?: boolean
    group?: boolean
    description?: boolean
    title?: boolean
    hasOutrights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "active" | "group" | "description" | "title" | "hasOutrights" | "createdAt" | "updatedAt", ExtArgs["result"]["sport"]>
  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Sport$eventsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      active: boolean
      group: string
      description: string
      title: string
      hasOutrights: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports and returns the data updated in the database.
     * @param {SportUpdateManyAndReturnArgs} args - Arguments to update many Sports.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportUpdateManyAndReturnArgs>(args: SelectSubset<T, SportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Sport$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sport model
   */
  interface SportFieldRefs {
    readonly id: FieldRef<"Sport", 'String'>
    readonly key: FieldRef<"Sport", 'String'>
    readonly active: FieldRef<"Sport", 'Boolean'>
    readonly group: FieldRef<"Sport", 'String'>
    readonly description: FieldRef<"Sport", 'String'>
    readonly title: FieldRef<"Sport", 'String'>
    readonly hasOutrights: FieldRef<"Sport", 'Boolean'>
    readonly createdAt: FieldRef<"Sport", 'DateTime'>
    readonly updatedAt: FieldRef<"Sport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport updateManyAndReturn
   */
  export type SportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to update.
     */
    limit?: number
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
    /**
     * Limit how many Sports to delete.
     */
    limit?: number
  }

  /**
   * Sport.events
   */
  export type Sport$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sport
     */
    omit?: SportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    sportKey: string | null
    sportTitle: string | null
    commenceTime: Date | null
    homeTeam: string | null
    awayTeam: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    sportKey: string | null
    sportTitle: string | null
    commenceTime: Date | null
    homeTeam: string | null
    awayTeam: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    sportKey: number
    sportTitle: number
    commenceTime: number
    homeTeam: number
    awayTeam: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    sportKey?: true
    sportTitle?: true
    commenceTime?: true
    homeTeam?: true
    awayTeam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    sportKey?: true
    sportTitle?: true
    commenceTime?: true
    homeTeam?: true
    awayTeam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    sportKey?: true
    sportTitle?: true
    commenceTime?: true
    homeTeam?: true
    awayTeam?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    sportKey: string
    sportTitle: string
    commenceTime: Date
    homeTeam: string
    awayTeam: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportKey?: boolean
    sportTitle?: boolean
    commenceTime?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    bookmakerEntries?: boolean | Event$bookmakerEntriesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportKey?: boolean
    sportTitle?: boolean
    commenceTime?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportKey?: boolean
    sportTitle?: boolean
    commenceTime?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    sportKey?: boolean
    sportTitle?: boolean
    commenceTime?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sportKey" | "sportTitle" | "commenceTime" | "homeTeam" | "awayTeam" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    bookmakerEntries?: boolean | Event$bookmakerEntriesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      sport: Prisma.$SportPayload<ExtArgs>
      bookmakerEntries: Prisma.$BookmakerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sportKey: string
      sportTitle: string
      commenceTime: Date
      homeTeam: string
      awayTeam: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookmakerEntries<T extends Event$bookmakerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Event$bookmakerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly sportKey: FieldRef<"Event", 'String'>
    readonly sportTitle: FieldRef<"Event", 'String'>
    readonly commenceTime: FieldRef<"Event", 'DateTime'>
    readonly homeTeam: FieldRef<"Event", 'String'>
    readonly awayTeam: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.bookmakerEntries
   */
  export type Event$bookmakerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    where?: BookmakerEntryWhereInput
    orderBy?: BookmakerEntryOrderByWithRelationInput | BookmakerEntryOrderByWithRelationInput[]
    cursor?: BookmakerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmakerEntryScalarFieldEnum | BookmakerEntryScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model BookmakerEntry
   */

  export type AggregateBookmakerEntry = {
    _count: BookmakerEntryCountAggregateOutputType | null
    _min: BookmakerEntryMinAggregateOutputType | null
    _max: BookmakerEntryMaxAggregateOutputType | null
  }

  export type BookmakerEntryMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    key: string | null
    title: string | null
    lastUpdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmakerEntryMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    key: string | null
    title: string | null
    lastUpdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmakerEntryCountAggregateOutputType = {
    id: number
    eventId: number
    key: number
    title: number
    lastUpdate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmakerEntryMinAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    title?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmakerEntryMaxAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    title?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmakerEntryCountAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    title?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmakerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmakerEntry to aggregate.
     */
    where?: BookmakerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmakerEntries to fetch.
     */
    orderBy?: BookmakerEntryOrderByWithRelationInput | BookmakerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmakerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmakerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmakerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmakerEntries
    **/
    _count?: true | BookmakerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmakerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmakerEntryMaxAggregateInputType
  }

  export type GetBookmakerEntryAggregateType<T extends BookmakerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmakerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmakerEntry[P]>
      : GetScalarType<T[P], AggregateBookmakerEntry[P]>
  }




  export type BookmakerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmakerEntryWhereInput
    orderBy?: BookmakerEntryOrderByWithAggregationInput | BookmakerEntryOrderByWithAggregationInput[]
    by: BookmakerEntryScalarFieldEnum[] | BookmakerEntryScalarFieldEnum
    having?: BookmakerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmakerEntryCountAggregateInputType | true
    _min?: BookmakerEntryMinAggregateInputType
    _max?: BookmakerEntryMaxAggregateInputType
  }

  export type BookmakerEntryGroupByOutputType = {
    id: string
    eventId: string
    key: string
    title: string
    lastUpdate: Date
    createdAt: Date
    updatedAt: Date
    _count: BookmakerEntryCountAggregateOutputType | null
    _min: BookmakerEntryMinAggregateOutputType | null
    _max: BookmakerEntryMaxAggregateOutputType | null
  }

  type GetBookmakerEntryGroupByPayload<T extends BookmakerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmakerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmakerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmakerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], BookmakerEntryGroupByOutputType[P]>
        }
      >
    >


  export type BookmakerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    title?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    markets?: boolean | BookmakerEntry$marketsArgs<ExtArgs>
    _count?: boolean | BookmakerEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmakerEntry"]>

  export type BookmakerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    title?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmakerEntry"]>

  export type BookmakerEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    title?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmakerEntry"]>

  export type BookmakerEntrySelectScalar = {
    id?: boolean
    eventId?: boolean
    key?: boolean
    title?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookmakerEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "key" | "title" | "lastUpdate" | "createdAt" | "updatedAt", ExtArgs["result"]["bookmakerEntry"]>
  export type BookmakerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    markets?: boolean | BookmakerEntry$marketsArgs<ExtArgs>
    _count?: boolean | BookmakerEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookmakerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type BookmakerEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $BookmakerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmakerEntry"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      markets: Prisma.$MarketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      key: string
      title: string
      lastUpdate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookmakerEntry"]>
    composites: {}
  }

  type BookmakerEntryGetPayload<S extends boolean | null | undefined | BookmakerEntryDefaultArgs> = $Result.GetResult<Prisma.$BookmakerEntryPayload, S>

  type BookmakerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmakerEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmakerEntryCountAggregateInputType | true
    }

  export interface BookmakerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmakerEntry'], meta: { name: 'BookmakerEntry' } }
    /**
     * Find zero or one BookmakerEntry that matches the filter.
     * @param {BookmakerEntryFindUniqueArgs} args - Arguments to find a BookmakerEntry
     * @example
     * // Get one BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmakerEntryFindUniqueArgs>(args: SelectSubset<T, BookmakerEntryFindUniqueArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookmakerEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmakerEntryFindUniqueOrThrowArgs} args - Arguments to find a BookmakerEntry
     * @example
     * // Get one BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmakerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmakerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmakerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryFindFirstArgs} args - Arguments to find a BookmakerEntry
     * @example
     * // Get one BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmakerEntryFindFirstArgs>(args?: SelectSubset<T, BookmakerEntryFindFirstArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmakerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryFindFirstOrThrowArgs} args - Arguments to find a BookmakerEntry
     * @example
     * // Get one BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmakerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmakerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookmakerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmakerEntries
     * const bookmakerEntries = await prisma.bookmakerEntry.findMany()
     * 
     * // Get first 10 BookmakerEntries
     * const bookmakerEntries = await prisma.bookmakerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmakerEntryWithIdOnly = await prisma.bookmakerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmakerEntryFindManyArgs>(args?: SelectSubset<T, BookmakerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookmakerEntry.
     * @param {BookmakerEntryCreateArgs} args - Arguments to create a BookmakerEntry.
     * @example
     * // Create one BookmakerEntry
     * const BookmakerEntry = await prisma.bookmakerEntry.create({
     *   data: {
     *     // ... data to create a BookmakerEntry
     *   }
     * })
     * 
     */
    create<T extends BookmakerEntryCreateArgs>(args: SelectSubset<T, BookmakerEntryCreateArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookmakerEntries.
     * @param {BookmakerEntryCreateManyArgs} args - Arguments to create many BookmakerEntries.
     * @example
     * // Create many BookmakerEntries
     * const bookmakerEntry = await prisma.bookmakerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmakerEntryCreateManyArgs>(args?: SelectSubset<T, BookmakerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmakerEntries and returns the data saved in the database.
     * @param {BookmakerEntryCreateManyAndReturnArgs} args - Arguments to create many BookmakerEntries.
     * @example
     * // Create many BookmakerEntries
     * const bookmakerEntry = await prisma.bookmakerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmakerEntries and only return the `id`
     * const bookmakerEntryWithIdOnly = await prisma.bookmakerEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmakerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmakerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookmakerEntry.
     * @param {BookmakerEntryDeleteArgs} args - Arguments to delete one BookmakerEntry.
     * @example
     * // Delete one BookmakerEntry
     * const BookmakerEntry = await prisma.bookmakerEntry.delete({
     *   where: {
     *     // ... filter to delete one BookmakerEntry
     *   }
     * })
     * 
     */
    delete<T extends BookmakerEntryDeleteArgs>(args: SelectSubset<T, BookmakerEntryDeleteArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookmakerEntry.
     * @param {BookmakerEntryUpdateArgs} args - Arguments to update one BookmakerEntry.
     * @example
     * // Update one BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmakerEntryUpdateArgs>(args: SelectSubset<T, BookmakerEntryUpdateArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookmakerEntries.
     * @param {BookmakerEntryDeleteManyArgs} args - Arguments to filter BookmakerEntries to delete.
     * @example
     * // Delete a few BookmakerEntries
     * const { count } = await prisma.bookmakerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmakerEntryDeleteManyArgs>(args?: SelectSubset<T, BookmakerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmakerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmakerEntries
     * const bookmakerEntry = await prisma.bookmakerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmakerEntryUpdateManyArgs>(args: SelectSubset<T, BookmakerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmakerEntries and returns the data updated in the database.
     * @param {BookmakerEntryUpdateManyAndReturnArgs} args - Arguments to update many BookmakerEntries.
     * @example
     * // Update many BookmakerEntries
     * const bookmakerEntry = await prisma.bookmakerEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmakerEntries and only return the `id`
     * const bookmakerEntryWithIdOnly = await prisma.bookmakerEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmakerEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmakerEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookmakerEntry.
     * @param {BookmakerEntryUpsertArgs} args - Arguments to update or create a BookmakerEntry.
     * @example
     * // Update or create a BookmakerEntry
     * const bookmakerEntry = await prisma.bookmakerEntry.upsert({
     *   create: {
     *     // ... data to create a BookmakerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmakerEntry we want to update
     *   }
     * })
     */
    upsert<T extends BookmakerEntryUpsertArgs>(args: SelectSubset<T, BookmakerEntryUpsertArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookmakerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryCountArgs} args - Arguments to filter BookmakerEntries to count.
     * @example
     * // Count the number of BookmakerEntries
     * const count = await prisma.bookmakerEntry.count({
     *   where: {
     *     // ... the filter for the BookmakerEntries we want to count
     *   }
     * })
    **/
    count<T extends BookmakerEntryCountArgs>(
      args?: Subset<T, BookmakerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmakerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmakerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmakerEntryAggregateArgs>(args: Subset<T, BookmakerEntryAggregateArgs>): Prisma.PrismaPromise<GetBookmakerEntryAggregateType<T>>

    /**
     * Group by BookmakerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmakerEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmakerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmakerEntryGroupByArgs['orderBy'] }
        : { orderBy?: BookmakerEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmakerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmakerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmakerEntry model
   */
  readonly fields: BookmakerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmakerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmakerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    markets<T extends BookmakerEntry$marketsArgs<ExtArgs> = {}>(args?: Subset<T, BookmakerEntry$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookmakerEntry model
   */
  interface BookmakerEntryFieldRefs {
    readonly id: FieldRef<"BookmakerEntry", 'String'>
    readonly eventId: FieldRef<"BookmakerEntry", 'String'>
    readonly key: FieldRef<"BookmakerEntry", 'String'>
    readonly title: FieldRef<"BookmakerEntry", 'String'>
    readonly lastUpdate: FieldRef<"BookmakerEntry", 'DateTime'>
    readonly createdAt: FieldRef<"BookmakerEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"BookmakerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookmakerEntry findUnique
   */
  export type BookmakerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter, which BookmakerEntry to fetch.
     */
    where: BookmakerEntryWhereUniqueInput
  }

  /**
   * BookmakerEntry findUniqueOrThrow
   */
  export type BookmakerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter, which BookmakerEntry to fetch.
     */
    where: BookmakerEntryWhereUniqueInput
  }

  /**
   * BookmakerEntry findFirst
   */
  export type BookmakerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter, which BookmakerEntry to fetch.
     */
    where?: BookmakerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmakerEntries to fetch.
     */
    orderBy?: BookmakerEntryOrderByWithRelationInput | BookmakerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmakerEntries.
     */
    cursor?: BookmakerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmakerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmakerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmakerEntries.
     */
    distinct?: BookmakerEntryScalarFieldEnum | BookmakerEntryScalarFieldEnum[]
  }

  /**
   * BookmakerEntry findFirstOrThrow
   */
  export type BookmakerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter, which BookmakerEntry to fetch.
     */
    where?: BookmakerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmakerEntries to fetch.
     */
    orderBy?: BookmakerEntryOrderByWithRelationInput | BookmakerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmakerEntries.
     */
    cursor?: BookmakerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmakerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmakerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmakerEntries.
     */
    distinct?: BookmakerEntryScalarFieldEnum | BookmakerEntryScalarFieldEnum[]
  }

  /**
   * BookmakerEntry findMany
   */
  export type BookmakerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter, which BookmakerEntries to fetch.
     */
    where?: BookmakerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmakerEntries to fetch.
     */
    orderBy?: BookmakerEntryOrderByWithRelationInput | BookmakerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmakerEntries.
     */
    cursor?: BookmakerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmakerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmakerEntries.
     */
    skip?: number
    distinct?: BookmakerEntryScalarFieldEnum | BookmakerEntryScalarFieldEnum[]
  }

  /**
   * BookmakerEntry create
   */
  export type BookmakerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmakerEntry.
     */
    data: XOR<BookmakerEntryCreateInput, BookmakerEntryUncheckedCreateInput>
  }

  /**
   * BookmakerEntry createMany
   */
  export type BookmakerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmakerEntries.
     */
    data: BookmakerEntryCreateManyInput | BookmakerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmakerEntry createManyAndReturn
   */
  export type BookmakerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * The data used to create many BookmakerEntries.
     */
    data: BookmakerEntryCreateManyInput | BookmakerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmakerEntry update
   */
  export type BookmakerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmakerEntry.
     */
    data: XOR<BookmakerEntryUpdateInput, BookmakerEntryUncheckedUpdateInput>
    /**
     * Choose, which BookmakerEntry to update.
     */
    where: BookmakerEntryWhereUniqueInput
  }

  /**
   * BookmakerEntry updateMany
   */
  export type BookmakerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmakerEntries.
     */
    data: XOR<BookmakerEntryUpdateManyMutationInput, BookmakerEntryUncheckedUpdateManyInput>
    /**
     * Filter which BookmakerEntries to update
     */
    where?: BookmakerEntryWhereInput
    /**
     * Limit how many BookmakerEntries to update.
     */
    limit?: number
  }

  /**
   * BookmakerEntry updateManyAndReturn
   */
  export type BookmakerEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * The data used to update BookmakerEntries.
     */
    data: XOR<BookmakerEntryUpdateManyMutationInput, BookmakerEntryUncheckedUpdateManyInput>
    /**
     * Filter which BookmakerEntries to update
     */
    where?: BookmakerEntryWhereInput
    /**
     * Limit how many BookmakerEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmakerEntry upsert
   */
  export type BookmakerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmakerEntry to update in case it exists.
     */
    where: BookmakerEntryWhereUniqueInput
    /**
     * In case the BookmakerEntry found by the `where` argument doesn't exist, create a new BookmakerEntry with this data.
     */
    create: XOR<BookmakerEntryCreateInput, BookmakerEntryUncheckedCreateInput>
    /**
     * In case the BookmakerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmakerEntryUpdateInput, BookmakerEntryUncheckedUpdateInput>
  }

  /**
   * BookmakerEntry delete
   */
  export type BookmakerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
    /**
     * Filter which BookmakerEntry to delete.
     */
    where: BookmakerEntryWhereUniqueInput
  }

  /**
   * BookmakerEntry deleteMany
   */
  export type BookmakerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmakerEntries to delete
     */
    where?: BookmakerEntryWhereInput
    /**
     * Limit how many BookmakerEntries to delete.
     */
    limit?: number
  }

  /**
   * BookmakerEntry.markets
   */
  export type BookmakerEntry$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * BookmakerEntry without action
   */
  export type BookmakerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmakerEntry
     */
    select?: BookmakerEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmakerEntry
     */
    omit?: BookmakerEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmakerEntryInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    bookmakerEntryId: string | null
    key: string | null
    lastUpdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    bookmakerEntryId: string | null
    key: string | null
    lastUpdate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    bookmakerEntryId: number
    key: number
    lastUpdate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarketMinAggregateInputType = {
    id?: true
    bookmakerEntryId?: true
    key?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    bookmakerEntryId?: true
    key?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    bookmakerEntryId?: true
    key?: true
    lastUpdate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    bookmakerEntryId: string
    key: string
    lastUpdate: Date
    createdAt: Date
    updatedAt: Date
    _count: MarketCountAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookmakerEntryId?: boolean
    key?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
    outcomes?: boolean | Market$outcomesArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookmakerEntryId?: boolean
    key?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookmakerEntryId?: boolean
    key?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    bookmakerEntryId?: boolean
    key?: boolean
    lastUpdate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookmakerEntryId" | "key" | "lastUpdate" | "createdAt" | "updatedAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
    outcomes?: boolean | Market$outcomesArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
  }
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmakerEntry?: boolean | BookmakerEntryDefaultArgs<ExtArgs>
  }

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      bookmakerEntry: Prisma.$BookmakerEntryPayload<ExtArgs>
      outcomes: Prisma.$OutcomePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookmakerEntryId: string
      key: string
      lastUpdate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmakerEntry<T extends BookmakerEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookmakerEntryDefaultArgs<ExtArgs>>): Prisma__BookmakerEntryClient<$Result.GetResult<Prisma.$BookmakerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outcomes<T extends Market$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, Market$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly bookmakerEntryId: FieldRef<"Market", 'String'>
    readonly key: FieldRef<"Market", 'String'>
    readonly lastUpdate: FieldRef<"Market", 'DateTime'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly updatedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.outcomes
   */
  export type Market$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    cursor?: OutcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Outcome
   */

  export type AggregateOutcome = {
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  export type OutcomeAvgAggregateOutputType = {
    price: number | null
    point: number | null
    betLimit: number | null
  }

  export type OutcomeSumAggregateOutputType = {
    price: number | null
    point: number | null
    betLimit: number | null
  }

  export type OutcomeMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    name: string | null
    price: number | null
    point: number | null
    betLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutcomeMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    name: string | null
    price: number | null
    point: number | null
    betLimit: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutcomeCountAggregateOutputType = {
    id: number
    marketId: number
    name: number
    price: number
    point: number
    betLimit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutcomeAvgAggregateInputType = {
    price?: true
    point?: true
    betLimit?: true
  }

  export type OutcomeSumAggregateInputType = {
    price?: true
    point?: true
    betLimit?: true
  }

  export type OutcomeMinAggregateInputType = {
    id?: true
    marketId?: true
    name?: true
    price?: true
    point?: true
    betLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutcomeMaxAggregateInputType = {
    id?: true
    marketId?: true
    name?: true
    price?: true
    point?: true
    betLimit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutcomeCountAggregateInputType = {
    id?: true
    marketId?: true
    name?: true
    price?: true
    point?: true
    betLimit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutcomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcome to aggregate.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outcomes
    **/
    _count?: true | OutcomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutcomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutcomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutcomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutcomeMaxAggregateInputType
  }

  export type GetOutcomeAggregateType<T extends OutcomeAggregateArgs> = {
        [P in keyof T & keyof AggregateOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutcome[P]>
      : GetScalarType<T[P], AggregateOutcome[P]>
  }




  export type OutcomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithAggregationInput | OutcomeOrderByWithAggregationInput[]
    by: OutcomeScalarFieldEnum[] | OutcomeScalarFieldEnum
    having?: OutcomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutcomeCountAggregateInputType | true
    _avg?: OutcomeAvgAggregateInputType
    _sum?: OutcomeSumAggregateInputType
    _min?: OutcomeMinAggregateInputType
    _max?: OutcomeMaxAggregateInputType
  }

  export type OutcomeGroupByOutputType = {
    id: string
    marketId: string
    name: string
    price: number
    point: number | null
    betLimit: number | null
    createdAt: Date
    updatedAt: Date
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  type GetOutcomeGroupByPayload<T extends OutcomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutcomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutcomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
        }
      >
    >


  export type OutcomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    name?: boolean
    price?: boolean
    point?: boolean
    betLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    name?: boolean
    price?: boolean
    point?: boolean
    betLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    name?: boolean
    price?: boolean
    point?: boolean
    betLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectScalar = {
    id?: boolean
    marketId?: boolean
    name?: boolean
    price?: boolean
    point?: boolean
    betLimit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutcomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "name" | "price" | "point" | "betLimit" | "createdAt" | "updatedAt", ExtArgs["result"]["outcome"]>
  export type OutcomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type OutcomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type OutcomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $OutcomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outcome"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      name: string
      price: number
      point: number | null
      betLimit: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outcome"]>
    composites: {}
  }

  type OutcomeGetPayload<S extends boolean | null | undefined | OutcomeDefaultArgs> = $Result.GetResult<Prisma.$OutcomePayload, S>

  type OutcomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutcomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutcomeCountAggregateInputType | true
    }

  export interface OutcomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outcome'], meta: { name: 'Outcome' } }
    /**
     * Find zero or one Outcome that matches the filter.
     * @param {OutcomeFindUniqueArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutcomeFindUniqueArgs>(args: SelectSubset<T, OutcomeFindUniqueArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutcomeFindUniqueOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutcomeFindUniqueOrThrowArgs>(args: SelectSubset<T, OutcomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutcomeFindFirstArgs>(args?: SelectSubset<T, OutcomeFindFirstArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutcomeFindFirstOrThrowArgs>(args?: SelectSubset<T, OutcomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outcomes
     * const outcomes = await prisma.outcome.findMany()
     * 
     * // Get first 10 Outcomes
     * const outcomes = await prisma.outcome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outcomeWithIdOnly = await prisma.outcome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutcomeFindManyArgs>(args?: SelectSubset<T, OutcomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outcome.
     * @param {OutcomeCreateArgs} args - Arguments to create a Outcome.
     * @example
     * // Create one Outcome
     * const Outcome = await prisma.outcome.create({
     *   data: {
     *     // ... data to create a Outcome
     *   }
     * })
     * 
     */
    create<T extends OutcomeCreateArgs>(args: SelectSubset<T, OutcomeCreateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outcomes.
     * @param {OutcomeCreateManyArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutcomeCreateManyArgs>(args?: SelectSubset<T, OutcomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outcomes and returns the data saved in the database.
     * @param {OutcomeCreateManyAndReturnArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutcomeCreateManyAndReturnArgs>(args?: SelectSubset<T, OutcomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outcome.
     * @param {OutcomeDeleteArgs} args - Arguments to delete one Outcome.
     * @example
     * // Delete one Outcome
     * const Outcome = await prisma.outcome.delete({
     *   where: {
     *     // ... filter to delete one Outcome
     *   }
     * })
     * 
     */
    delete<T extends OutcomeDeleteArgs>(args: SelectSubset<T, OutcomeDeleteArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outcome.
     * @param {OutcomeUpdateArgs} args - Arguments to update one Outcome.
     * @example
     * // Update one Outcome
     * const outcome = await prisma.outcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutcomeUpdateArgs>(args: SelectSubset<T, OutcomeUpdateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outcomes.
     * @param {OutcomeDeleteManyArgs} args - Arguments to filter Outcomes to delete.
     * @example
     * // Delete a few Outcomes
     * const { count } = await prisma.outcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutcomeDeleteManyArgs>(args?: SelectSubset<T, OutcomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutcomeUpdateManyArgs>(args: SelectSubset<T, OutcomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes and returns the data updated in the database.
     * @param {OutcomeUpdateManyAndReturnArgs} args - Arguments to update many Outcomes.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutcomeUpdateManyAndReturnArgs>(args: SelectSubset<T, OutcomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outcome.
     * @param {OutcomeUpsertArgs} args - Arguments to update or create a Outcome.
     * @example
     * // Update or create a Outcome
     * const outcome = await prisma.outcome.upsert({
     *   create: {
     *     // ... data to create a Outcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outcome we want to update
     *   }
     * })
     */
    upsert<T extends OutcomeUpsertArgs>(args: SelectSubset<T, OutcomeUpsertArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeCountArgs} args - Arguments to filter Outcomes to count.
     * @example
     * // Count the number of Outcomes
     * const count = await prisma.outcome.count({
     *   where: {
     *     // ... the filter for the Outcomes we want to count
     *   }
     * })
    **/
    count<T extends OutcomeCountArgs>(
      args?: Subset<T, OutcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutcomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutcomeAggregateArgs>(args: Subset<T, OutcomeAggregateArgs>): Prisma.PrismaPromise<GetOutcomeAggregateType<T>>

    /**
     * Group by Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutcomeGroupByArgs['orderBy'] }
        : { orderBy?: OutcomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutcomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutcomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outcome model
   */
  readonly fields: OutcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutcomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outcome model
   */
  interface OutcomeFieldRefs {
    readonly id: FieldRef<"Outcome", 'String'>
    readonly marketId: FieldRef<"Outcome", 'String'>
    readonly name: FieldRef<"Outcome", 'String'>
    readonly price: FieldRef<"Outcome", 'Float'>
    readonly point: FieldRef<"Outcome", 'Float'>
    readonly betLimit: FieldRef<"Outcome", 'Float'>
    readonly createdAt: FieldRef<"Outcome", 'DateTime'>
    readonly updatedAt: FieldRef<"Outcome", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outcome findUnique
   */
  export type OutcomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findUniqueOrThrow
   */
  export type OutcomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findFirst
   */
  export type OutcomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findFirstOrThrow
   */
  export type OutcomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findMany
   */
  export type OutcomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcomes to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome create
   */
  export type OutcomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Outcome.
     */
    data: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
  }

  /**
   * Outcome createMany
   */
  export type OutcomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outcome createManyAndReturn
   */
  export type OutcomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome update
   */
  export type OutcomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Outcome.
     */
    data: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
    /**
     * Choose, which Outcome to update.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome updateMany
   */
  export type OutcomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
  }

  /**
   * Outcome updateManyAndReturn
   */
  export type OutcomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome upsert
   */
  export type OutcomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Outcome to update in case it exists.
     */
    where: OutcomeWhereUniqueInput
    /**
     * In case the Outcome found by the `where` argument doesn't exist, create a new Outcome with this data.
     */
    create: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
    /**
     * In case the Outcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
  }

  /**
   * Outcome delete
   */
  export type OutcomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter which Outcome to delete.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome deleteMany
   */
  export type OutcomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcomes to delete
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to delete.
     */
    limit?: number
  }

  /**
   * Outcome without action
   */
  export type OutcomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SportScalarFieldEnum: {
    id: 'id',
    key: 'key',
    active: 'active',
    group: 'group',
    description: 'description',
    title: 'title',
    hasOutrights: 'hasOutrights',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    sportKey: 'sportKey',
    sportTitle: 'sportTitle',
    commenceTime: 'commenceTime',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const BookmakerEntryScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    key: 'key',
    title: 'title',
    lastUpdate: 'lastUpdate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmakerEntryScalarFieldEnum = (typeof BookmakerEntryScalarFieldEnum)[keyof typeof BookmakerEntryScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    bookmakerEntryId: 'bookmakerEntryId',
    key: 'key',
    lastUpdate: 'lastUpdate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const OutcomeScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    name: 'name',
    price: 'price',
    point: 'point',
    betLimit: 'betLimit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutcomeScalarFieldEnum = (typeof OutcomeScalarFieldEnum)[keyof typeof OutcomeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id?: StringFilter<"Sport"> | string
    key?: StringFilter<"Sport"> | string
    active?: BoolFilter<"Sport"> | boolean
    group?: StringFilter<"Sport"> | string
    description?: StringFilter<"Sport"> | string
    title?: StringFilter<"Sport"> | string
    hasOutrights?: BoolFilter<"Sport"> | boolean
    createdAt?: DateTimeFilter<"Sport"> | Date | string
    updatedAt?: DateTimeFilter<"Sport"> | Date | string
    events?: EventListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    active?: SortOrder
    group?: SortOrder
    description?: SortOrder
    title?: SortOrder
    hasOutrights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    active?: BoolFilter<"Sport"> | boolean
    group?: StringFilter<"Sport"> | string
    description?: StringFilter<"Sport"> | string
    title?: StringFilter<"Sport"> | string
    hasOutrights?: BoolFilter<"Sport"> | boolean
    createdAt?: DateTimeFilter<"Sport"> | Date | string
    updatedAt?: DateTimeFilter<"Sport"> | Date | string
    events?: EventListRelationFilter
  }, "id" | "key">

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    active?: SortOrder
    group?: SortOrder
    description?: SortOrder
    title?: SortOrder
    hasOutrights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SportCountOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sport"> | string
    key?: StringWithAggregatesFilter<"Sport"> | string
    active?: BoolWithAggregatesFilter<"Sport"> | boolean
    group?: StringWithAggregatesFilter<"Sport"> | string
    description?: StringWithAggregatesFilter<"Sport"> | string
    title?: StringWithAggregatesFilter<"Sport"> | string
    hasOutrights?: BoolWithAggregatesFilter<"Sport"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sport"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    sportKey?: StringFilter<"Event"> | string
    sportTitle?: StringFilter<"Event"> | string
    commenceTime?: DateTimeFilter<"Event"> | Date | string
    homeTeam?: StringFilter<"Event"> | string
    awayTeam?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    bookmakerEntries?: BookmakerEntryListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    sportKey?: SortOrder
    sportTitle?: SortOrder
    commenceTime?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sport?: SportOrderByWithRelationInput
    bookmakerEntries?: BookmakerEntryOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    sportKey?: StringFilter<"Event"> | string
    sportTitle?: StringFilter<"Event"> | string
    commenceTime?: DateTimeFilter<"Event"> | Date | string
    homeTeam?: StringFilter<"Event"> | string
    awayTeam?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    sport?: XOR<SportScalarRelationFilter, SportWhereInput>
    bookmakerEntries?: BookmakerEntryListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    sportKey?: SortOrder
    sportTitle?: SortOrder
    commenceTime?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    sportKey?: StringWithAggregatesFilter<"Event"> | string
    sportTitle?: StringWithAggregatesFilter<"Event"> | string
    commenceTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    homeTeam?: StringWithAggregatesFilter<"Event"> | string
    awayTeam?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type BookmakerEntryWhereInput = {
    AND?: BookmakerEntryWhereInput | BookmakerEntryWhereInput[]
    OR?: BookmakerEntryWhereInput[]
    NOT?: BookmakerEntryWhereInput | BookmakerEntryWhereInput[]
    id?: StringFilter<"BookmakerEntry"> | string
    eventId?: StringFilter<"BookmakerEntry"> | string
    key?: StringFilter<"BookmakerEntry"> | string
    title?: StringFilter<"BookmakerEntry"> | string
    lastUpdate?: DateTimeFilter<"BookmakerEntry"> | Date | string
    createdAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    markets?: MarketListRelationFilter
  }

  export type BookmakerEntryOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    markets?: MarketOrderByRelationAggregateInput
  }

  export type BookmakerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_key?: BookmakerEntryEventIdKeyCompoundUniqueInput
    AND?: BookmakerEntryWhereInput | BookmakerEntryWhereInput[]
    OR?: BookmakerEntryWhereInput[]
    NOT?: BookmakerEntryWhereInput | BookmakerEntryWhereInput[]
    eventId?: StringFilter<"BookmakerEntry"> | string
    key?: StringFilter<"BookmakerEntry"> | string
    title?: StringFilter<"BookmakerEntry"> | string
    lastUpdate?: DateTimeFilter<"BookmakerEntry"> | Date | string
    createdAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    markets?: MarketListRelationFilter
  }, "id" | "eventId_key">

  export type BookmakerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmakerEntryCountOrderByAggregateInput
    _max?: BookmakerEntryMaxOrderByAggregateInput
    _min?: BookmakerEntryMinOrderByAggregateInput
  }

  export type BookmakerEntryScalarWhereWithAggregatesInput = {
    AND?: BookmakerEntryScalarWhereWithAggregatesInput | BookmakerEntryScalarWhereWithAggregatesInput[]
    OR?: BookmakerEntryScalarWhereWithAggregatesInput[]
    NOT?: BookmakerEntryScalarWhereWithAggregatesInput | BookmakerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookmakerEntry"> | string
    eventId?: StringWithAggregatesFilter<"BookmakerEntry"> | string
    key?: StringWithAggregatesFilter<"BookmakerEntry"> | string
    title?: StringWithAggregatesFilter<"BookmakerEntry"> | string
    lastUpdate?: DateTimeWithAggregatesFilter<"BookmakerEntry"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BookmakerEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookmakerEntry"> | Date | string
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    bookmakerEntryId?: StringFilter<"Market"> | string
    key?: StringFilter<"Market"> | string
    lastUpdate?: DateTimeFilter<"Market"> | Date | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    bookmakerEntry?: XOR<BookmakerEntryScalarRelationFilter, BookmakerEntryWhereInput>
    outcomes?: OutcomeListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    bookmakerEntryId?: SortOrder
    key?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookmakerEntry?: BookmakerEntryOrderByWithRelationInput
    outcomes?: OutcomeOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookmakerEntryId_key?: MarketBookmakerEntryIdKeyCompoundUniqueInput
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    bookmakerEntryId?: StringFilter<"Market"> | string
    key?: StringFilter<"Market"> | string
    lastUpdate?: DateTimeFilter<"Market"> | Date | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    bookmakerEntry?: XOR<BookmakerEntryScalarRelationFilter, BookmakerEntryWhereInput>
    outcomes?: OutcomeListRelationFilter
  }, "id" | "bookmakerEntryId_key">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    bookmakerEntryId?: SortOrder
    key?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    bookmakerEntryId?: StringWithAggregatesFilter<"Market"> | string
    key?: StringWithAggregatesFilter<"Market"> | string
    lastUpdate?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
  }

  export type OutcomeWhereInput = {
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    id?: StringFilter<"Outcome"> | string
    marketId?: StringFilter<"Outcome"> | string
    name?: StringFilter<"Outcome"> | string
    price?: FloatFilter<"Outcome"> | number
    point?: FloatNullableFilter<"Outcome"> | number | null
    betLimit?: FloatNullableFilter<"Outcome"> | number | null
    createdAt?: DateTimeFilter<"Outcome"> | Date | string
    updatedAt?: DateTimeFilter<"Outcome"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }

  export type OutcomeOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    point?: SortOrderInput | SortOrder
    betLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type OutcomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    marketId_name?: OutcomeMarketIdNameCompoundUniqueInput
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    marketId?: StringFilter<"Outcome"> | string
    name?: StringFilter<"Outcome"> | string
    price?: FloatFilter<"Outcome"> | number
    point?: FloatNullableFilter<"Outcome"> | number | null
    betLimit?: FloatNullableFilter<"Outcome"> | number | null
    createdAt?: DateTimeFilter<"Outcome"> | Date | string
    updatedAt?: DateTimeFilter<"Outcome"> | Date | string
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
  }, "id" | "marketId_name">

  export type OutcomeOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    point?: SortOrderInput | SortOrder
    betLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutcomeCountOrderByAggregateInput
    _avg?: OutcomeAvgOrderByAggregateInput
    _max?: OutcomeMaxOrderByAggregateInput
    _min?: OutcomeMinOrderByAggregateInput
    _sum?: OutcomeSumOrderByAggregateInput
  }

  export type OutcomeScalarWhereWithAggregatesInput = {
    AND?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    OR?: OutcomeScalarWhereWithAggregatesInput[]
    NOT?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outcome"> | string
    marketId?: StringWithAggregatesFilter<"Outcome"> | string
    name?: StringWithAggregatesFilter<"Outcome"> | string
    price?: FloatWithAggregatesFilter<"Outcome"> | number
    point?: FloatNullableWithAggregatesFilter<"Outcome"> | number | null
    betLimit?: FloatNullableWithAggregatesFilter<"Outcome"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Outcome"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Outcome"> | Date | string
  }

  export type SportCreateInput = {
    id?: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sport: SportCreateNestedOneWithoutEventsInput
    bookmakerEntries?: BookmakerEntryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id: string
    sportKey: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmakerEntries?: BookmakerEntryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    bookmakerEntries?: BookmakerEntryUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportKey?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmakerEntries?: BookmakerEntryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id: string
    sportKey: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportKey?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmakerEntryCreateInput = {
    id?: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutBookmakerEntriesInput
    markets?: MarketCreateNestedManyWithoutBookmakerEntryInput
  }

  export type BookmakerEntryUncheckedCreateInput = {
    id?: string
    eventId: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    markets?: MarketUncheckedCreateNestedManyWithoutBookmakerEntryInput
  }

  export type BookmakerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutBookmakerEntriesNestedInput
    markets?: MarketUpdateManyWithoutBookmakerEntryNestedInput
  }

  export type BookmakerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUncheckedUpdateManyWithoutBookmakerEntryNestedInput
  }

  export type BookmakerEntryCreateManyInput = {
    id?: string
    eventId: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmakerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmakerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateInput = {
    id?: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmakerEntry: BookmakerEntryCreateNestedOneWithoutMarketsInput
    outcomes?: OutcomeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    bookmakerEntryId: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmakerEntry?: BookmakerEntryUpdateOneRequiredWithoutMarketsNestedInput
    outcomes?: OutcomeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmakerEntryId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    bookmakerEntryId: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmakerEntryId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateInput = {
    id?: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketCreateNestedOneWithoutOutcomesInput
  }

  export type OutcomeUncheckedCreateInput = {
    id?: string
    marketId: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOutcomesNestedInput
  }

  export type OutcomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateManyInput = {
    id?: string
    marketId: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    active?: SortOrder
    group?: SortOrder
    description?: SortOrder
    title?: SortOrder
    hasOutrights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    active?: SortOrder
    group?: SortOrder
    description?: SortOrder
    title?: SortOrder
    hasOutrights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    active?: SortOrder
    group?: SortOrder
    description?: SortOrder
    title?: SortOrder
    hasOutrights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SportScalarRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type BookmakerEntryListRelationFilter = {
    every?: BookmakerEntryWhereInput
    some?: BookmakerEntryWhereInput
    none?: BookmakerEntryWhereInput
  }

  export type BookmakerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    sportKey?: SortOrder
    sportTitle?: SortOrder
    commenceTime?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    sportKey?: SortOrder
    sportTitle?: SortOrder
    commenceTime?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    sportKey?: SortOrder
    sportTitle?: SortOrder
    commenceTime?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmakerEntryEventIdKeyCompoundUniqueInput = {
    eventId: string
    key: string
  }

  export type BookmakerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmakerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmakerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    title?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmakerEntryScalarRelationFilter = {
    is?: BookmakerEntryWhereInput
    isNot?: BookmakerEntryWhereInput
  }

  export type OutcomeListRelationFilter = {
    every?: OutcomeWhereInput
    some?: OutcomeWhereInput
    none?: OutcomeWhereInput
  }

  export type OutcomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketBookmakerEntryIdKeyCompoundUniqueInput = {
    bookmakerEntryId: string
    key: string
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    bookmakerEntryId?: SortOrder
    key?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    bookmakerEntryId?: SortOrder
    key?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    bookmakerEntryId?: SortOrder
    key?: SortOrder
    lastUpdate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OutcomeMarketIdNameCompoundUniqueInput = {
    marketId: string
    name: string
  }

  export type OutcomeCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    point?: SortOrder
    betLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeAvgOrderByAggregateInput = {
    price?: SortOrder
    point?: SortOrder
    betLimit?: SortOrder
  }

  export type OutcomeMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    point?: SortOrder
    betLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    point?: SortOrder
    betLimit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeSumOrderByAggregateInput = {
    price?: SortOrder
    point?: SortOrder
    betLimit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutSportInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutSportNestedInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSportInput | EventUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSportInput | EventUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSportInput | EventUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSportInput | EventUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSportInput | EventUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSportInput | EventUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SportCreateNestedOneWithoutEventsInput = {
    create?: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SportCreateOrConnectWithoutEventsInput
    connect?: SportWhereUniqueInput
  }

  export type BookmakerEntryCreateNestedManyWithoutEventInput = {
    create?: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput> | BookmakerEntryCreateWithoutEventInput[] | BookmakerEntryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutEventInput | BookmakerEntryCreateOrConnectWithoutEventInput[]
    createMany?: BookmakerEntryCreateManyEventInputEnvelope
    connect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
  }

  export type BookmakerEntryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput> | BookmakerEntryCreateWithoutEventInput[] | BookmakerEntryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutEventInput | BookmakerEntryCreateOrConnectWithoutEventInput[]
    createMany?: BookmakerEntryCreateManyEventInputEnvelope
    connect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
  }

  export type SportUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SportCreateOrConnectWithoutEventsInput
    upsert?: SportUpsertWithoutEventsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutEventsInput, SportUpdateWithoutEventsInput>, SportUncheckedUpdateWithoutEventsInput>
  }

  export type BookmakerEntryUpdateManyWithoutEventNestedInput = {
    create?: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput> | BookmakerEntryCreateWithoutEventInput[] | BookmakerEntryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutEventInput | BookmakerEntryCreateOrConnectWithoutEventInput[]
    upsert?: BookmakerEntryUpsertWithWhereUniqueWithoutEventInput | BookmakerEntryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BookmakerEntryCreateManyEventInputEnvelope
    set?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    disconnect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    delete?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    connect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    update?: BookmakerEntryUpdateWithWhereUniqueWithoutEventInput | BookmakerEntryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BookmakerEntryUpdateManyWithWhereWithoutEventInput | BookmakerEntryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BookmakerEntryScalarWhereInput | BookmakerEntryScalarWhereInput[]
  }

  export type BookmakerEntryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput> | BookmakerEntryCreateWithoutEventInput[] | BookmakerEntryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutEventInput | BookmakerEntryCreateOrConnectWithoutEventInput[]
    upsert?: BookmakerEntryUpsertWithWhereUniqueWithoutEventInput | BookmakerEntryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: BookmakerEntryCreateManyEventInputEnvelope
    set?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    disconnect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    delete?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    connect?: BookmakerEntryWhereUniqueInput | BookmakerEntryWhereUniqueInput[]
    update?: BookmakerEntryUpdateWithWhereUniqueWithoutEventInput | BookmakerEntryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: BookmakerEntryUpdateManyWithWhereWithoutEventInput | BookmakerEntryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: BookmakerEntryScalarWhereInput | BookmakerEntryScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutBookmakerEntriesInput = {
    create?: XOR<EventCreateWithoutBookmakerEntriesInput, EventUncheckedCreateWithoutBookmakerEntriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutBookmakerEntriesInput
    connect?: EventWhereUniqueInput
  }

  export type MarketCreateNestedManyWithoutBookmakerEntryInput = {
    create?: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput> | MarketCreateWithoutBookmakerEntryInput[] | MarketUncheckedCreateWithoutBookmakerEntryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutBookmakerEntryInput | MarketCreateOrConnectWithoutBookmakerEntryInput[]
    createMany?: MarketCreateManyBookmakerEntryInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutBookmakerEntryInput = {
    create?: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput> | MarketCreateWithoutBookmakerEntryInput[] | MarketUncheckedCreateWithoutBookmakerEntryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutBookmakerEntryInput | MarketCreateOrConnectWithoutBookmakerEntryInput[]
    createMany?: MarketCreateManyBookmakerEntryInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutBookmakerEntriesNestedInput = {
    create?: XOR<EventCreateWithoutBookmakerEntriesInput, EventUncheckedCreateWithoutBookmakerEntriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutBookmakerEntriesInput
    upsert?: EventUpsertWithoutBookmakerEntriesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutBookmakerEntriesInput, EventUpdateWithoutBookmakerEntriesInput>, EventUncheckedUpdateWithoutBookmakerEntriesInput>
  }

  export type MarketUpdateManyWithoutBookmakerEntryNestedInput = {
    create?: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput> | MarketCreateWithoutBookmakerEntryInput[] | MarketUncheckedCreateWithoutBookmakerEntryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutBookmakerEntryInput | MarketCreateOrConnectWithoutBookmakerEntryInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutBookmakerEntryInput | MarketUpsertWithWhereUniqueWithoutBookmakerEntryInput[]
    createMany?: MarketCreateManyBookmakerEntryInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutBookmakerEntryInput | MarketUpdateWithWhereUniqueWithoutBookmakerEntryInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutBookmakerEntryInput | MarketUpdateManyWithWhereWithoutBookmakerEntryInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutBookmakerEntryNestedInput = {
    create?: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput> | MarketCreateWithoutBookmakerEntryInput[] | MarketUncheckedCreateWithoutBookmakerEntryInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutBookmakerEntryInput | MarketCreateOrConnectWithoutBookmakerEntryInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutBookmakerEntryInput | MarketUpsertWithWhereUniqueWithoutBookmakerEntryInput[]
    createMany?: MarketCreateManyBookmakerEntryInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutBookmakerEntryInput | MarketUpdateWithWhereUniqueWithoutBookmakerEntryInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutBookmakerEntryInput | MarketUpdateManyWithWhereWithoutBookmakerEntryInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type BookmakerEntryCreateNestedOneWithoutMarketsInput = {
    create?: XOR<BookmakerEntryCreateWithoutMarketsInput, BookmakerEntryUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutMarketsInput
    connect?: BookmakerEntryWhereUniqueInput
  }

  export type OutcomeCreateNestedManyWithoutMarketInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type OutcomeUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type BookmakerEntryUpdateOneRequiredWithoutMarketsNestedInput = {
    create?: XOR<BookmakerEntryCreateWithoutMarketsInput, BookmakerEntryUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: BookmakerEntryCreateOrConnectWithoutMarketsInput
    upsert?: BookmakerEntryUpsertWithoutMarketsInput
    connect?: BookmakerEntryWhereUniqueInput
    update?: XOR<XOR<BookmakerEntryUpdateToOneWithWhereWithoutMarketsInput, BookmakerEntryUpdateWithoutMarketsInput>, BookmakerEntryUncheckedUpdateWithoutMarketsInput>
  }

  export type OutcomeUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutMarketInput | OutcomeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutMarketInput | OutcomeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutMarketInput | OutcomeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type OutcomeUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutMarketInput | OutcomeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutMarketInput | OutcomeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutMarketInput | OutcomeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type MarketCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOutcomesInput
    connect?: MarketWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarketUpdateOneRequiredWithoutOutcomesNestedInput = {
    create?: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOutcomesInput
    upsert?: MarketUpsertWithoutOutcomesInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutOutcomesInput, MarketUpdateWithoutOutcomesInput>, MarketUncheckedUpdateWithoutOutcomesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EventCreateWithoutSportInput = {
    id: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmakerEntries?: BookmakerEntryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutSportInput = {
    id: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmakerEntries?: BookmakerEntryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutSportInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput>
  }

  export type EventCreateManySportInputEnvelope = {
    data: EventCreateManySportInput | EventCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutSportInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSportInput, EventUncheckedUpdateWithoutSportInput>
    create: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput>
  }

  export type EventUpdateWithWhereUniqueWithoutSportInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSportInput, EventUncheckedUpdateWithoutSportInput>
  }

  export type EventUpdateManyWithWhereWithoutSportInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSportInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    sportKey?: StringFilter<"Event"> | string
    sportTitle?: StringFilter<"Event"> | string
    commenceTime?: DateTimeFilter<"Event"> | Date | string
    homeTeam?: StringFilter<"Event"> | string
    awayTeam?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type SportCreateWithoutEventsInput = {
    id?: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SportUncheckedCreateWithoutEventsInput = {
    id?: string
    key: string
    active: boolean
    group: string
    description: string
    title: string
    hasOutrights: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SportCreateOrConnectWithoutEventsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
  }

  export type BookmakerEntryCreateWithoutEventInput = {
    id?: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    markets?: MarketCreateNestedManyWithoutBookmakerEntryInput
  }

  export type BookmakerEntryUncheckedCreateWithoutEventInput = {
    id?: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    markets?: MarketUncheckedCreateNestedManyWithoutBookmakerEntryInput
  }

  export type BookmakerEntryCreateOrConnectWithoutEventInput = {
    where: BookmakerEntryWhereUniqueInput
    create: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput>
  }

  export type BookmakerEntryCreateManyEventInputEnvelope = {
    data: BookmakerEntryCreateManyEventInput | BookmakerEntryCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type SportUpsertWithoutEventsInput = {
    update: XOR<SportUpdateWithoutEventsInput, SportUncheckedUpdateWithoutEventsInput>
    create: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutEventsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutEventsInput, SportUncheckedUpdateWithoutEventsInput>
  }

  export type SportUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    group?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    hasOutrights?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmakerEntryUpsertWithWhereUniqueWithoutEventInput = {
    where: BookmakerEntryWhereUniqueInput
    update: XOR<BookmakerEntryUpdateWithoutEventInput, BookmakerEntryUncheckedUpdateWithoutEventInput>
    create: XOR<BookmakerEntryCreateWithoutEventInput, BookmakerEntryUncheckedCreateWithoutEventInput>
  }

  export type BookmakerEntryUpdateWithWhereUniqueWithoutEventInput = {
    where: BookmakerEntryWhereUniqueInput
    data: XOR<BookmakerEntryUpdateWithoutEventInput, BookmakerEntryUncheckedUpdateWithoutEventInput>
  }

  export type BookmakerEntryUpdateManyWithWhereWithoutEventInput = {
    where: BookmakerEntryScalarWhereInput
    data: XOR<BookmakerEntryUpdateManyMutationInput, BookmakerEntryUncheckedUpdateManyWithoutEventInput>
  }

  export type BookmakerEntryScalarWhereInput = {
    AND?: BookmakerEntryScalarWhereInput | BookmakerEntryScalarWhereInput[]
    OR?: BookmakerEntryScalarWhereInput[]
    NOT?: BookmakerEntryScalarWhereInput | BookmakerEntryScalarWhereInput[]
    id?: StringFilter<"BookmakerEntry"> | string
    eventId?: StringFilter<"BookmakerEntry"> | string
    key?: StringFilter<"BookmakerEntry"> | string
    title?: StringFilter<"BookmakerEntry"> | string
    lastUpdate?: DateTimeFilter<"BookmakerEntry"> | Date | string
    createdAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"BookmakerEntry"> | Date | string
  }

  export type EventCreateWithoutBookmakerEntriesInput = {
    id: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sport: SportCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutBookmakerEntriesInput = {
    id: string
    sportKey: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutBookmakerEntriesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBookmakerEntriesInput, EventUncheckedCreateWithoutBookmakerEntriesInput>
  }

  export type MarketCreateWithoutBookmakerEntryInput = {
    id?: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    outcomes?: OutcomeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutBookmakerEntryInput = {
    id?: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutBookmakerEntryInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput>
  }

  export type MarketCreateManyBookmakerEntryInputEnvelope = {
    data: MarketCreateManyBookmakerEntryInput | MarketCreateManyBookmakerEntryInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutBookmakerEntriesInput = {
    update: XOR<EventUpdateWithoutBookmakerEntriesInput, EventUncheckedUpdateWithoutBookmakerEntriesInput>
    create: XOR<EventCreateWithoutBookmakerEntriesInput, EventUncheckedCreateWithoutBookmakerEntriesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutBookmakerEntriesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutBookmakerEntriesInput, EventUncheckedUpdateWithoutBookmakerEntriesInput>
  }

  export type EventUpdateWithoutBookmakerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutBookmakerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportKey?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUpsertWithWhereUniqueWithoutBookmakerEntryInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutBookmakerEntryInput, MarketUncheckedUpdateWithoutBookmakerEntryInput>
    create: XOR<MarketCreateWithoutBookmakerEntryInput, MarketUncheckedCreateWithoutBookmakerEntryInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutBookmakerEntryInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutBookmakerEntryInput, MarketUncheckedUpdateWithoutBookmakerEntryInput>
  }

  export type MarketUpdateManyWithWhereWithoutBookmakerEntryInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutBookmakerEntryInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: StringFilter<"Market"> | string
    bookmakerEntryId?: StringFilter<"Market"> | string
    key?: StringFilter<"Market"> | string
    lastUpdate?: DateTimeFilter<"Market"> | Date | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
  }

  export type BookmakerEntryCreateWithoutMarketsInput = {
    id?: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutBookmakerEntriesInput
  }

  export type BookmakerEntryUncheckedCreateWithoutMarketsInput = {
    id?: string
    eventId: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmakerEntryCreateOrConnectWithoutMarketsInput = {
    where: BookmakerEntryWhereUniqueInput
    create: XOR<BookmakerEntryCreateWithoutMarketsInput, BookmakerEntryUncheckedCreateWithoutMarketsInput>
  }

  export type OutcomeCreateWithoutMarketInput = {
    id?: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeUncheckedCreateWithoutMarketInput = {
    id?: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeCreateOrConnectWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput>
  }

  export type OutcomeCreateManyMarketInputEnvelope = {
    data: OutcomeCreateManyMarketInput | OutcomeCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type BookmakerEntryUpsertWithoutMarketsInput = {
    update: XOR<BookmakerEntryUpdateWithoutMarketsInput, BookmakerEntryUncheckedUpdateWithoutMarketsInput>
    create: XOR<BookmakerEntryCreateWithoutMarketsInput, BookmakerEntryUncheckedCreateWithoutMarketsInput>
    where?: BookmakerEntryWhereInput
  }

  export type BookmakerEntryUpdateToOneWithWhereWithoutMarketsInput = {
    where?: BookmakerEntryWhereInput
    data: XOR<BookmakerEntryUpdateWithoutMarketsInput, BookmakerEntryUncheckedUpdateWithoutMarketsInput>
  }

  export type BookmakerEntryUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutBookmakerEntriesNestedInput
  }

  export type BookmakerEntryUncheckedUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUpsertWithWhereUniqueWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    update: XOR<OutcomeUpdateWithoutMarketInput, OutcomeUncheckedUpdateWithoutMarketInput>
    create: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput>
  }

  export type OutcomeUpdateWithWhereUniqueWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    data: XOR<OutcomeUpdateWithoutMarketInput, OutcomeUncheckedUpdateWithoutMarketInput>
  }

  export type OutcomeUpdateManyWithWhereWithoutMarketInput = {
    where: OutcomeScalarWhereInput
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyWithoutMarketInput>
  }

  export type OutcomeScalarWhereInput = {
    AND?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    OR?: OutcomeScalarWhereInput[]
    NOT?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    id?: StringFilter<"Outcome"> | string
    marketId?: StringFilter<"Outcome"> | string
    name?: StringFilter<"Outcome"> | string
    price?: FloatFilter<"Outcome"> | number
    point?: FloatNullableFilter<"Outcome"> | number | null
    betLimit?: FloatNullableFilter<"Outcome"> | number | null
    createdAt?: DateTimeFilter<"Outcome"> | Date | string
    updatedAt?: DateTimeFilter<"Outcome"> | Date | string
  }

  export type MarketCreateWithoutOutcomesInput = {
    id?: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmakerEntry: BookmakerEntryCreateNestedOneWithoutMarketsInput
  }

  export type MarketUncheckedCreateWithoutOutcomesInput = {
    id?: string
    bookmakerEntryId: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketCreateOrConnectWithoutOutcomesInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
  }

  export type MarketUpsertWithoutOutcomesInput = {
    update: XOR<MarketUpdateWithoutOutcomesInput, MarketUncheckedUpdateWithoutOutcomesInput>
    create: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutOutcomesInput, MarketUncheckedUpdateWithoutOutcomesInput>
  }

  export type MarketUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmakerEntry?: BookmakerEntryUpdateOneRequiredWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookmakerEntryId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManySportInput = {
    id: string
    sportTitle: string
    commenceTime: Date | string
    homeTeam: string
    awayTeam: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmakerEntries?: BookmakerEntryUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmakerEntries?: BookmakerEntryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    sportTitle?: StringFieldUpdateOperationsInput | string
    commenceTime?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmakerEntryCreateManyEventInput = {
    id?: string
    key: string
    title: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmakerEntryUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUpdateManyWithoutBookmakerEntryNestedInput
  }

  export type BookmakerEntryUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUncheckedUpdateManyWithoutBookmakerEntryNestedInput
  }

  export type BookmakerEntryUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateManyBookmakerEntryInput = {
    id?: string
    key: string
    lastUpdate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarketUpdateWithoutBookmakerEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutBookmakerEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutBookmakerEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateManyMarketInput = {
    id?: string
    name: string
    price: number
    point?: number | null
    betLimit?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutcomeUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    point?: NullableFloatFieldUpdateOperationsInput | number | null
    betLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}