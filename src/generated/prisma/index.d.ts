
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model resumes
 * 
 */
export type resumes = $Result.DefaultSelection<Prisma.$resumesPayload>
/**
 * Model educations
 * 
 */
export type educations = $Result.DefaultSelection<Prisma.$educationsPayload>
/**
 * Model EducationDescriptionPoints
 * 
 */
export type EducationDescriptionPoints = $Result.DefaultSelection<Prisma.$EducationDescriptionPointsPayload>
/**
 * Model work_experiences
 * 
 */
export type work_experiences = $Result.DefaultSelection<Prisma.$work_experiencesPayload>
/**
 * Model WorkExperienceDescriptionPoints
 * 
 */
export type WorkExperienceDescriptionPoints = $Result.DefaultSelection<Prisma.$WorkExperienceDescriptionPointsPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model media_links
 * 
 */
export type media_links = $Result.DefaultSelection<Prisma.$media_linksPayload>
/**
 * Model skills
 * 
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>
/**
 * Model job_applications
 * 
 */
export type job_applications = $Result.DefaultSelection<Prisma.$job_applicationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumes`: Exposes CRUD operations for the **resumes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resumes.findMany()
    * ```
    */
  get resumes(): Prisma.resumesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educations`: Exposes CRUD operations for the **educations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.educations.findMany()
    * ```
    */
  get educations(): Prisma.educationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.educationDescriptionPoints`: Exposes CRUD operations for the **EducationDescriptionPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationDescriptionPoints
    * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findMany()
    * ```
    */
  get educationDescriptionPoints(): Prisma.EducationDescriptionPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_experiences`: Exposes CRUD operations for the **work_experiences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_experiences
    * const work_experiences = await prisma.work_experiences.findMany()
    * ```
    */
  get work_experiences(): Prisma.work_experiencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperienceDescriptionPoints`: Exposes CRUD operations for the **WorkExperienceDescriptionPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperienceDescriptionPoints
    * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findMany()
    * ```
    */
  get workExperienceDescriptionPoints(): Prisma.WorkExperienceDescriptionPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media_links`: Exposes CRUD operations for the **media_links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media_links
    * const media_links = await prisma.media_links.findMany()
    * ```
    */
  get media_links(): Prisma.media_linksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.skillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_applications`: Exposes CRUD operations for the **job_applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_applications
    * const job_applications = await prisma.job_applications.findMany()
    * ```
    */
  get job_applications(): Prisma.job_applicationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    users: 'users',
    resumes: 'resumes',
    educations: 'educations',
    EducationDescriptionPoints: 'EducationDescriptionPoints',
    work_experiences: 'work_experiences',
    WorkExperienceDescriptionPoints: 'WorkExperienceDescriptionPoints',
    projects: 'projects',
    media_links: 'media_links',
    skills: 'skills',
    job_applications: 'job_applications'
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
      modelProps: "users" | "resumes" | "educations" | "educationDescriptionPoints" | "work_experiences" | "workExperienceDescriptionPoints" | "projects" | "media_links" | "skills" | "job_applications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      resumes: {
        payload: Prisma.$resumesPayload<ExtArgs>
        fields: Prisma.resumesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resumesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resumesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          findFirst: {
            args: Prisma.resumesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resumesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          findMany: {
            args: Prisma.resumesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>[]
          }
          create: {
            args: Prisma.resumesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          createMany: {
            args: Prisma.resumesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.resumesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>[]
          }
          delete: {
            args: Prisma.resumesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          update: {
            args: Prisma.resumesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          deleteMany: {
            args: Prisma.resumesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resumesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.resumesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>[]
          }
          upsert: {
            args: Prisma.resumesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resumesPayload>
          }
          aggregate: {
            args: Prisma.ResumesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumes>
          }
          groupBy: {
            args: Prisma.resumesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumesGroupByOutputType>[]
          }
          count: {
            args: Prisma.resumesCountArgs<ExtArgs>
            result: $Utils.Optional<ResumesCountAggregateOutputType> | number
          }
        }
      }
      educations: {
        payload: Prisma.$educationsPayload<ExtArgs>
        fields: Prisma.educationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.educationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.educationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          findFirst: {
            args: Prisma.educationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.educationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          findMany: {
            args: Prisma.educationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>[]
          }
          create: {
            args: Prisma.educationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          createMany: {
            args: Prisma.educationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.educationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>[]
          }
          delete: {
            args: Prisma.educationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          update: {
            args: Prisma.educationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          deleteMany: {
            args: Prisma.educationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.educationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.educationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>[]
          }
          upsert: {
            args: Prisma.educationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$educationsPayload>
          }
          aggregate: {
            args: Prisma.EducationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducations>
          }
          groupBy: {
            args: Prisma.educationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.educationsCountArgs<ExtArgs>
            result: $Utils.Optional<EducationsCountAggregateOutputType> | number
          }
        }
      }
      EducationDescriptionPoints: {
        payload: Prisma.$EducationDescriptionPointsPayload<ExtArgs>
        fields: Prisma.EducationDescriptionPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationDescriptionPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationDescriptionPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          findFirst: {
            args: Prisma.EducationDescriptionPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationDescriptionPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          findMany: {
            args: Prisma.EducationDescriptionPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>[]
          }
          create: {
            args: Prisma.EducationDescriptionPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          createMany: {
            args: Prisma.EducationDescriptionPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationDescriptionPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>[]
          }
          delete: {
            args: Prisma.EducationDescriptionPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          update: {
            args: Prisma.EducationDescriptionPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          deleteMany: {
            args: Prisma.EducationDescriptionPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationDescriptionPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationDescriptionPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>[]
          }
          upsert: {
            args: Prisma.EducationDescriptionPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationDescriptionPointsPayload>
          }
          aggregate: {
            args: Prisma.EducationDescriptionPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationDescriptionPoints>
          }
          groupBy: {
            args: Prisma.EducationDescriptionPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationDescriptionPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationDescriptionPointsCountArgs<ExtArgs>
            result: $Utils.Optional<EducationDescriptionPointsCountAggregateOutputType> | number
          }
        }
      }
      work_experiences: {
        payload: Prisma.$work_experiencesPayload<ExtArgs>
        fields: Prisma.work_experiencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_experiencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_experiencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          findFirst: {
            args: Prisma.work_experiencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_experiencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          findMany: {
            args: Prisma.work_experiencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>[]
          }
          create: {
            args: Prisma.work_experiencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          createMany: {
            args: Prisma.work_experiencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_experiencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>[]
          }
          delete: {
            args: Prisma.work_experiencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          update: {
            args: Prisma.work_experiencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          deleteMany: {
            args: Prisma.work_experiencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_experiencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_experiencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>[]
          }
          upsert: {
            args: Prisma.work_experiencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_experiencesPayload>
          }
          aggregate: {
            args: Prisma.Work_experiencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_experiences>
          }
          groupBy: {
            args: Prisma.work_experiencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_experiencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_experiencesCountArgs<ExtArgs>
            result: $Utils.Optional<Work_experiencesCountAggregateOutputType> | number
          }
        }
      }
      WorkExperienceDescriptionPoints: {
        payload: Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>
        fields: Prisma.WorkExperienceDescriptionPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceDescriptionPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceDescriptionPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceDescriptionPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceDescriptionPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          findMany: {
            args: Prisma.WorkExperienceDescriptionPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>[]
          }
          create: {
            args: Prisma.WorkExperienceDescriptionPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          createMany: {
            args: Prisma.WorkExperienceDescriptionPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkExperienceDescriptionPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>[]
          }
          delete: {
            args: Prisma.WorkExperienceDescriptionPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          update: {
            args: Prisma.WorkExperienceDescriptionPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDescriptionPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceDescriptionPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkExperienceDescriptionPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>[]
          }
          upsert: {
            args: Prisma.WorkExperienceDescriptionPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperienceDescriptionPointsPayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceDescriptionPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperienceDescriptionPoints>
          }
          groupBy: {
            args: Prisma.WorkExperienceDescriptionPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceDescriptionPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceDescriptionPointsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceDescriptionPointsCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      media_links: {
        payload: Prisma.$media_linksPayload<ExtArgs>
        fields: Prisma.media_linksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.media_linksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.media_linksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          findFirst: {
            args: Prisma.media_linksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.media_linksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          findMany: {
            args: Prisma.media_linksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>[]
          }
          create: {
            args: Prisma.media_linksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          createMany: {
            args: Prisma.media_linksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.media_linksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>[]
          }
          delete: {
            args: Prisma.media_linksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          update: {
            args: Prisma.media_linksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          deleteMany: {
            args: Prisma.media_linksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.media_linksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.media_linksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>[]
          }
          upsert: {
            args: Prisma.media_linksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$media_linksPayload>
          }
          aggregate: {
            args: Prisma.Media_linksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia_links>
          }
          groupBy: {
            args: Prisma.media_linksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Media_linksGroupByOutputType>[]
          }
          count: {
            args: Prisma.media_linksCountArgs<ExtArgs>
            result: $Utils.Optional<Media_linksCountAggregateOutputType> | number
          }
        }
      }
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>
        fields: Prisma.skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      job_applications: {
        payload: Prisma.$job_applicationsPayload<ExtArgs>
        fields: Prisma.job_applicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.job_applicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.job_applicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          findFirst: {
            args: Prisma.job_applicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.job_applicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          findMany: {
            args: Prisma.job_applicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          create: {
            args: Prisma.job_applicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          createMany: {
            args: Prisma.job_applicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.job_applicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          delete: {
            args: Prisma.job_applicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          update: {
            args: Prisma.job_applicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          deleteMany: {
            args: Prisma.job_applicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.job_applicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.job_applicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>[]
          }
          upsert: {
            args: Prisma.job_applicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$job_applicationsPayload>
          }
          aggregate: {
            args: Prisma.Job_applicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_applications>
          }
          groupBy: {
            args: Prisma.job_applicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_applicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.job_applicationsCountArgs<ExtArgs>
            result: $Utils.Optional<Job_applicationsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: usersOmit
    resumes?: resumesOmit
    educations?: educationsOmit
    educationDescriptionPoints?: EducationDescriptionPointsOmit
    work_experiences?: work_experiencesOmit
    workExperienceDescriptionPoints?: WorkExperienceDescriptionPointsOmit
    projects?: projectsOmit
    media_links?: media_linksOmit
    skills?: skillsOmit
    job_applications?: job_applicationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ResumesCountOutputType
   */

  export type ResumesCountOutputType = {
    educations: number
    media_links: number
    projects: number
    skills: number
    work_experiences: number
  }

  export type ResumesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educations?: boolean | ResumesCountOutputTypeCountEducationsArgs
    media_links?: boolean | ResumesCountOutputTypeCountMedia_linksArgs
    projects?: boolean | ResumesCountOutputTypeCountProjectsArgs
    skills?: boolean | ResumesCountOutputTypeCountSkillsArgs
    work_experiences?: boolean | ResumesCountOutputTypeCountWork_experiencesArgs
  }

  // Custom InputTypes
  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumesCountOutputType
     */
    select?: ResumesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationsWhereInput
  }

  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeCountMedia_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: media_linksWhereInput
  }

  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
  }

  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
  }

  /**
   * ResumesCountOutputType without action
   */
  export type ResumesCountOutputTypeCountWork_experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_experiencesWhereInput
  }


  /**
   * Count Type EducationsCountOutputType
   */

  export type EducationsCountOutputType = {
    description_points: number
  }

  export type EducationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description_points?: boolean | EducationsCountOutputTypeCountDescription_pointsArgs
  }

  // Custom InputTypes
  /**
   * EducationsCountOutputType without action
   */
  export type EducationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationsCountOutputType
     */
    select?: EducationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationsCountOutputType without action
   */
  export type EducationsCountOutputTypeCountDescription_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationDescriptionPointsWhereInput
  }


  /**
   * Count Type Work_experiencesCountOutputType
   */

  export type Work_experiencesCountOutputType = {
    description_points: number
  }

  export type Work_experiencesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description_points?: boolean | Work_experiencesCountOutputTypeCountDescription_pointsArgs
  }

  // Custom InputTypes
  /**
   * Work_experiencesCountOutputType without action
   */
  export type Work_experiencesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work_experiencesCountOutputType
     */
    select?: Work_experiencesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Work_experiencesCountOutputType without action
   */
  export type Work_experiencesCountOutputTypeCountDescription_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceDescriptionPointsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    user_name: string | null
    email: string | null
    password: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    user_name: string | null
    email: string | null
    password: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    user_name: number
    email: number
    password: number
    role: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    user_name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    user_name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    user_name?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    user_name: string
    email: string
    password: string
    role: string | null
    is_active: boolean
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_name" | "email" | "password" | "role" | "is_active" | "created_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_name: string
      email: string
      password: string
      role: string | null
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly is_active: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model resumes
   */

  export type AggregateResumes = {
    _count: ResumesCountAggregateOutputType | null
    _avg: ResumesAvgAggregateOutputType | null
    _sum: ResumesSumAggregateOutputType | null
    _min: ResumesMinAggregateOutputType | null
    _max: ResumesMaxAggregateOutputType | null
  }

  export type ResumesAvgAggregateOutputType = {
    id: number | null
  }

  export type ResumesSumAggregateOutputType = {
    id: bigint | null
  }

  export type ResumesMinAggregateOutputType = {
    id: bigint | null
    resume_name: string | null
    is_active: boolean | null
    full_name: string | null
    email: string | null
    phone: string | null
    picture: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResumesMaxAggregateOutputType = {
    id: bigint | null
    resume_name: string | null
    is_active: boolean | null
    full_name: string | null
    email: string | null
    phone: string | null
    picture: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResumesCountAggregateOutputType = {
    id: number
    resume_name: number
    is_active: number
    full_name: number
    email: number
    phone: number
    picture: number
    summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResumesAvgAggregateInputType = {
    id?: true
  }

  export type ResumesSumAggregateInputType = {
    id?: true
  }

  export type ResumesMinAggregateInputType = {
    id?: true
    resume_name?: true
    is_active?: true
    full_name?: true
    email?: true
    phone?: true
    picture?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ResumesMaxAggregateInputType = {
    id?: true
    resume_name?: true
    is_active?: true
    full_name?: true
    email?: true
    phone?: true
    picture?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type ResumesCountAggregateInputType = {
    id?: true
    resume_name?: true
    is_active?: true
    full_name?: true
    email?: true
    phone?: true
    picture?: true
    summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResumesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resumes to aggregate.
     */
    where?: resumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumesOrderByWithRelationInput | resumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resumes
    **/
    _count?: true | ResumesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumesMaxAggregateInputType
  }

  export type GetResumesAggregateType<T extends ResumesAggregateArgs> = {
        [P in keyof T & keyof AggregateResumes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumes[P]>
      : GetScalarType<T[P], AggregateResumes[P]>
  }




  export type resumesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resumesWhereInput
    orderBy?: resumesOrderByWithAggregationInput | resumesOrderByWithAggregationInput[]
    by: ResumesScalarFieldEnum[] | ResumesScalarFieldEnum
    having?: resumesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumesCountAggregateInputType | true
    _avg?: ResumesAvgAggregateInputType
    _sum?: ResumesSumAggregateInputType
    _min?: ResumesMinAggregateInputType
    _max?: ResumesMaxAggregateInputType
  }

  export type ResumesGroupByOutputType = {
    id: bigint
    resume_name: string | null
    is_active: boolean | null
    full_name: string | null
    email: string | null
    phone: string | null
    picture: string | null
    summary: string | null
    created_at: Date
    updated_at: Date | null
    _count: ResumesCountAggregateOutputType | null
    _avg: ResumesAvgAggregateOutputType | null
    _sum: ResumesSumAggregateOutputType | null
    _min: ResumesMinAggregateOutputType | null
    _max: ResumesMaxAggregateOutputType | null
  }

  type GetResumesGroupByPayload<T extends resumesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumesGroupByOutputType[P]>
            : GetScalarType<T[P], ResumesGroupByOutputType[P]>
        }
      >
    >


  export type resumesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resume_name?: boolean
    is_active?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    educations?: boolean | resumes$educationsArgs<ExtArgs>
    media_links?: boolean | resumes$media_linksArgs<ExtArgs>
    projects?: boolean | resumes$projectsArgs<ExtArgs>
    skills?: boolean | resumes$skillsArgs<ExtArgs>
    work_experiences?: boolean | resumes$work_experiencesArgs<ExtArgs>
    _count?: boolean | ResumesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumes"]>

  export type resumesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resume_name?: boolean
    is_active?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resumes"]>

  export type resumesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resume_name?: boolean
    is_active?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resumes"]>

  export type resumesSelectScalar = {
    id?: boolean
    resume_name?: boolean
    is_active?: boolean
    full_name?: boolean
    email?: boolean
    phone?: boolean
    picture?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type resumesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resume_name" | "is_active" | "full_name" | "email" | "phone" | "picture" | "summary" | "created_at" | "updated_at", ExtArgs["result"]["resumes"]>
  export type resumesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educations?: boolean | resumes$educationsArgs<ExtArgs>
    media_links?: boolean | resumes$media_linksArgs<ExtArgs>
    projects?: boolean | resumes$projectsArgs<ExtArgs>
    skills?: boolean | resumes$skillsArgs<ExtArgs>
    work_experiences?: boolean | resumes$work_experiencesArgs<ExtArgs>
    _count?: boolean | ResumesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type resumesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type resumesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $resumesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resumes"
    objects: {
      educations: Prisma.$educationsPayload<ExtArgs>[]
      media_links: Prisma.$media_linksPayload<ExtArgs>[]
      projects: Prisma.$projectsPayload<ExtArgs>[]
      skills: Prisma.$skillsPayload<ExtArgs>[]
      work_experiences: Prisma.$work_experiencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      resume_name: string | null
      is_active: boolean | null
      full_name: string | null
      email: string | null
      phone: string | null
      picture: string | null
      summary: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["resumes"]>
    composites: {}
  }

  type resumesGetPayload<S extends boolean | null | undefined | resumesDefaultArgs> = $Result.GetResult<Prisma.$resumesPayload, S>

  type resumesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resumesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumesCountAggregateInputType | true
    }

  export interface resumesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resumes'], meta: { name: 'resumes' } }
    /**
     * Find zero or one Resumes that matches the filter.
     * @param {resumesFindUniqueArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resumesFindUniqueArgs>(args: SelectSubset<T, resumesFindUniqueArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resumes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resumesFindUniqueOrThrowArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resumesFindUniqueOrThrowArgs>(args: SelectSubset<T, resumesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesFindFirstArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resumesFindFirstArgs>(args?: SelectSubset<T, resumesFindFirstArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resumes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesFindFirstOrThrowArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resumesFindFirstOrThrowArgs>(args?: SelectSubset<T, resumesFindFirstOrThrowArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resumes.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resumes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumesWithIdOnly = await prisma.resumes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends resumesFindManyArgs>(args?: SelectSubset<T, resumesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resumes.
     * @param {resumesCreateArgs} args - Arguments to create a Resumes.
     * @example
     * // Create one Resumes
     * const Resumes = await prisma.resumes.create({
     *   data: {
     *     // ... data to create a Resumes
     *   }
     * })
     * 
     */
    create<T extends resumesCreateArgs>(args: SelectSubset<T, resumesCreateArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {resumesCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resumes = await prisma.resumes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resumesCreateManyArgs>(args?: SelectSubset<T, resumesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {resumesCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resumes = await prisma.resumes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumesWithIdOnly = await prisma.resumes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends resumesCreateManyAndReturnArgs>(args?: SelectSubset<T, resumesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resumes.
     * @param {resumesDeleteArgs} args - Arguments to delete one Resumes.
     * @example
     * // Delete one Resumes
     * const Resumes = await prisma.resumes.delete({
     *   where: {
     *     // ... filter to delete one Resumes
     *   }
     * })
     * 
     */
    delete<T extends resumesDeleteArgs>(args: SelectSubset<T, resumesDeleteArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resumes.
     * @param {resumesUpdateArgs} args - Arguments to update one Resumes.
     * @example
     * // Update one Resumes
     * const resumes = await prisma.resumes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resumesUpdateArgs>(args: SelectSubset<T, resumesUpdateArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {resumesDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resumes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resumesDeleteManyArgs>(args?: SelectSubset<T, resumesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resumes = await prisma.resumes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resumesUpdateManyArgs>(args: SelectSubset<T, resumesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {resumesUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resumes = await prisma.resumes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumesWithIdOnly = await prisma.resumes.updateManyAndReturn({
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
    updateManyAndReturn<T extends resumesUpdateManyAndReturnArgs>(args: SelectSubset<T, resumesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resumes.
     * @param {resumesUpsertArgs} args - Arguments to update or create a Resumes.
     * @example
     * // Update or create a Resumes
     * const resumes = await prisma.resumes.upsert({
     *   create: {
     *     // ... data to create a Resumes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resumes we want to update
     *   }
     * })
     */
    upsert<T extends resumesUpsertArgs>(args: SelectSubset<T, resumesUpsertArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resumes.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends resumesCountArgs>(
      args?: Subset<T, resumesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumesAggregateArgs>(args: Subset<T, ResumesAggregateArgs>): Prisma.PrismaPromise<GetResumesAggregateType<T>>

    /**
     * Group by Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumesGroupByArgs} args - Group by arguments.
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
      T extends resumesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resumesGroupByArgs['orderBy'] }
        : { orderBy?: resumesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, resumesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resumes model
   */
  readonly fields: resumesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resumes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resumesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    educations<T extends resumes$educationsArgs<ExtArgs> = {}>(args?: Subset<T, resumes$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media_links<T extends resumes$media_linksArgs<ExtArgs> = {}>(args?: Subset<T, resumes$media_linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends resumes$projectsArgs<ExtArgs> = {}>(args?: Subset<T, resumes$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends resumes$skillsArgs<ExtArgs> = {}>(args?: Subset<T, resumes$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    work_experiences<T extends resumes$work_experiencesArgs<ExtArgs> = {}>(args?: Subset<T, resumes$work_experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the resumes model
   */
  interface resumesFieldRefs {
    readonly id: FieldRef<"resumes", 'BigInt'>
    readonly resume_name: FieldRef<"resumes", 'String'>
    readonly is_active: FieldRef<"resumes", 'Boolean'>
    readonly full_name: FieldRef<"resumes", 'String'>
    readonly email: FieldRef<"resumes", 'String'>
    readonly phone: FieldRef<"resumes", 'String'>
    readonly picture: FieldRef<"resumes", 'String'>
    readonly summary: FieldRef<"resumes", 'String'>
    readonly created_at: FieldRef<"resumes", 'DateTime'>
    readonly updated_at: FieldRef<"resumes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * resumes findUnique
   */
  export type resumesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where: resumesWhereUniqueInput
  }

  /**
   * resumes findUniqueOrThrow
   */
  export type resumesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where: resumesWhereUniqueInput
  }

  /**
   * resumes findFirst
   */
  export type resumesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where?: resumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumesOrderByWithRelationInput | resumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resumes.
     */
    cursor?: resumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resumes.
     */
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * resumes findFirstOrThrow
   */
  export type resumesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where?: resumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumesOrderByWithRelationInput | resumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resumes.
     */
    cursor?: resumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resumes.
     */
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * resumes findMany
   */
  export type resumesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where?: resumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumesOrderByWithRelationInput | resumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resumes.
     */
    cursor?: resumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * resumes create
   */
  export type resumesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * The data needed to create a resumes.
     */
    data?: XOR<resumesCreateInput, resumesUncheckedCreateInput>
  }

  /**
   * resumes createMany
   */
  export type resumesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resumes.
     */
    data: resumesCreateManyInput | resumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resumes createManyAndReturn
   */
  export type resumesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * The data used to create many resumes.
     */
    data: resumesCreateManyInput | resumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resumes update
   */
  export type resumesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * The data needed to update a resumes.
     */
    data: XOR<resumesUpdateInput, resumesUncheckedUpdateInput>
    /**
     * Choose, which resumes to update.
     */
    where: resumesWhereUniqueInput
  }

  /**
   * resumes updateMany
   */
  export type resumesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resumes.
     */
    data: XOR<resumesUpdateManyMutationInput, resumesUncheckedUpdateManyInput>
    /**
     * Filter which resumes to update
     */
    where?: resumesWhereInput
    /**
     * Limit how many resumes to update.
     */
    limit?: number
  }

  /**
   * resumes updateManyAndReturn
   */
  export type resumesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * The data used to update resumes.
     */
    data: XOR<resumesUpdateManyMutationInput, resumesUncheckedUpdateManyInput>
    /**
     * Filter which resumes to update
     */
    where?: resumesWhereInput
    /**
     * Limit how many resumes to update.
     */
    limit?: number
  }

  /**
   * resumes upsert
   */
  export type resumesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * The filter to search for the resumes to update in case it exists.
     */
    where: resumesWhereUniqueInput
    /**
     * In case the resumes found by the `where` argument doesn't exist, create a new resumes with this data.
     */
    create: XOR<resumesCreateInput, resumesUncheckedCreateInput>
    /**
     * In case the resumes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resumesUpdateInput, resumesUncheckedUpdateInput>
  }

  /**
   * resumes delete
   */
  export type resumesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    /**
     * Filter which resumes to delete.
     */
    where: resumesWhereUniqueInput
  }

  /**
   * resumes deleteMany
   */
  export type resumesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resumes to delete
     */
    where?: resumesWhereInput
    /**
     * Limit how many resumes to delete.
     */
    limit?: number
  }

  /**
   * resumes.educations
   */
  export type resumes$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    where?: educationsWhereInput
    orderBy?: educationsOrderByWithRelationInput | educationsOrderByWithRelationInput[]
    cursor?: educationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationsScalarFieldEnum | EducationsScalarFieldEnum[]
  }

  /**
   * resumes.media_links
   */
  export type resumes$media_linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    where?: media_linksWhereInput
    orderBy?: media_linksOrderByWithRelationInput | media_linksOrderByWithRelationInput[]
    cursor?: media_linksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Media_linksScalarFieldEnum | Media_linksScalarFieldEnum[]
  }

  /**
   * resumes.projects
   */
  export type resumes$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    cursor?: projectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * resumes.skills
   */
  export type resumes$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    cursor?: skillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * resumes.work_experiences
   */
  export type resumes$work_experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    where?: work_experiencesWhereInput
    orderBy?: work_experiencesOrderByWithRelationInput | work_experiencesOrderByWithRelationInput[]
    cursor?: work_experiencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Work_experiencesScalarFieldEnum | Work_experiencesScalarFieldEnum[]
  }

  /**
   * resumes without action
   */
  export type resumesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
  }


  /**
   * Model educations
   */

  export type AggregateEducations = {
    _count: EducationsCountAggregateOutputType | null
    _avg: EducationsAvgAggregateOutputType | null
    _sum: EducationsSumAggregateOutputType | null
    _min: EducationsMinAggregateOutputType | null
    _max: EducationsMaxAggregateOutputType | null
  }

  export type EducationsAvgAggregateOutputType = {
    id: number | null
    resume_id: number | null
  }

  export type EducationsSumAggregateOutputType = {
    id: bigint | null
    resume_id: bigint | null
  }

  export type EducationsMinAggregateOutputType = {
    id: bigint | null
    school: string | null
    education_name: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
  }

  export type EducationsMaxAggregateOutputType = {
    id: bigint | null
    school: string | null
    education_name: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
  }

  export type EducationsCountAggregateOutputType = {
    id: number
    school: number
    education_name: number
    start_date: number
    end_date: number
    resume_id: number
    _all: number
  }


  export type EducationsAvgAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type EducationsSumAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type EducationsMinAggregateInputType = {
    id?: true
    school?: true
    education_name?: true
    start_date?: true
    end_date?: true
    resume_id?: true
  }

  export type EducationsMaxAggregateInputType = {
    id?: true
    school?: true
    education_name?: true
    start_date?: true
    end_date?: true
    resume_id?: true
  }

  export type EducationsCountAggregateInputType = {
    id?: true
    school?: true
    education_name?: true
    start_date?: true
    end_date?: true
    resume_id?: true
    _all?: true
  }

  export type EducationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educations to aggregate.
     */
    where?: educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationsOrderByWithRelationInput | educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned educations
    **/
    _count?: true | EducationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationsMaxAggregateInputType
  }

  export type GetEducationsAggregateType<T extends EducationsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducations[P]>
      : GetScalarType<T[P], AggregateEducations[P]>
  }




  export type educationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: educationsWhereInput
    orderBy?: educationsOrderByWithAggregationInput | educationsOrderByWithAggregationInput[]
    by: EducationsScalarFieldEnum[] | EducationsScalarFieldEnum
    having?: educationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationsCountAggregateInputType | true
    _avg?: EducationsAvgAggregateInputType
    _sum?: EducationsSumAggregateInputType
    _min?: EducationsMinAggregateInputType
    _max?: EducationsMaxAggregateInputType
  }

  export type EducationsGroupByOutputType = {
    id: bigint
    school: string | null
    education_name: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
    _count: EducationsCountAggregateOutputType | null
    _avg: EducationsAvgAggregateOutputType | null
    _sum: EducationsSumAggregateOutputType | null
    _min: EducationsMinAggregateOutputType | null
    _max: EducationsMaxAggregateOutputType | null
  }

  type GetEducationsGroupByPayload<T extends educationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationsGroupByOutputType[P]>
            : GetScalarType<T[P], EducationsGroupByOutputType[P]>
        }
      >
    >


  export type educationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    education_name?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | educations$resumeArgs<ExtArgs>
    description_points?: boolean | educations$description_pointsArgs<ExtArgs>
    _count?: boolean | EducationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educations"]>

  export type educationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    education_name?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | educations$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["educations"]>

  export type educationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    education_name?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | educations$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["educations"]>

  export type educationsSelectScalar = {
    id?: boolean
    school?: boolean
    education_name?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
  }

  export type educationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "school" | "education_name" | "start_date" | "end_date" | "resume_id", ExtArgs["result"]["educations"]>
  export type educationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | educations$resumeArgs<ExtArgs>
    description_points?: boolean | educations$description_pointsArgs<ExtArgs>
    _count?: boolean | EducationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type educationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | educations$resumeArgs<ExtArgs>
  }
  export type educationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | educations$resumeArgs<ExtArgs>
  }

  export type $educationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "educations"
    objects: {
      resume: Prisma.$resumesPayload<ExtArgs> | null
      description_points: Prisma.$EducationDescriptionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      school: string | null
      education_name: string | null
      start_date: string | null
      end_date: string | null
      resume_id: bigint | null
    }, ExtArgs["result"]["educations"]>
    composites: {}
  }

  type educationsGetPayload<S extends boolean | null | undefined | educationsDefaultArgs> = $Result.GetResult<Prisma.$educationsPayload, S>

  type educationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<educationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationsCountAggregateInputType | true
    }

  export interface educationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['educations'], meta: { name: 'educations' } }
    /**
     * Find zero or one Educations that matches the filter.
     * @param {educationsFindUniqueArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends educationsFindUniqueArgs>(args: SelectSubset<T, educationsFindUniqueArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Educations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {educationsFindUniqueOrThrowArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends educationsFindUniqueOrThrowArgs>(args: SelectSubset<T, educationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsFindFirstArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends educationsFindFirstArgs>(args?: SelectSubset<T, educationsFindFirstArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Educations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsFindFirstOrThrowArgs} args - Arguments to find a Educations
     * @example
     * // Get one Educations
     * const educations = await prisma.educations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends educationsFindFirstOrThrowArgs>(args?: SelectSubset<T, educationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.educations.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.educations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationsWithIdOnly = await prisma.educations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends educationsFindManyArgs>(args?: SelectSubset<T, educationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Educations.
     * @param {educationsCreateArgs} args - Arguments to create a Educations.
     * @example
     * // Create one Educations
     * const Educations = await prisma.educations.create({
     *   data: {
     *     // ... data to create a Educations
     *   }
     * })
     * 
     */
    create<T extends educationsCreateArgs>(args: SelectSubset<T, educationsCreateArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {educationsCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const educations = await prisma.educations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends educationsCreateManyArgs>(args?: SelectSubset<T, educationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {educationsCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const educations = await prisma.educations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationsWithIdOnly = await prisma.educations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends educationsCreateManyAndReturnArgs>(args?: SelectSubset<T, educationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Educations.
     * @param {educationsDeleteArgs} args - Arguments to delete one Educations.
     * @example
     * // Delete one Educations
     * const Educations = await prisma.educations.delete({
     *   where: {
     *     // ... filter to delete one Educations
     *   }
     * })
     * 
     */
    delete<T extends educationsDeleteArgs>(args: SelectSubset<T, educationsDeleteArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Educations.
     * @param {educationsUpdateArgs} args - Arguments to update one Educations.
     * @example
     * // Update one Educations
     * const educations = await prisma.educations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends educationsUpdateArgs>(args: SelectSubset<T, educationsUpdateArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {educationsDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.educations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends educationsDeleteManyArgs>(args?: SelectSubset<T, educationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const educations = await prisma.educations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends educationsUpdateManyArgs>(args: SelectSubset<T, educationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {educationsUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const educations = await prisma.educations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationsWithIdOnly = await prisma.educations.updateManyAndReturn({
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
    updateManyAndReturn<T extends educationsUpdateManyAndReturnArgs>(args: SelectSubset<T, educationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Educations.
     * @param {educationsUpsertArgs} args - Arguments to update or create a Educations.
     * @example
     * // Update or create a Educations
     * const educations = await prisma.educations.upsert({
     *   create: {
     *     // ... data to create a Educations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Educations we want to update
     *   }
     * })
     */
    upsert<T extends educationsUpsertArgs>(args: SelectSubset<T, educationsUpsertArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.educations.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends educationsCountArgs>(
      args?: Subset<T, educationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationsAggregateArgs>(args: Subset<T, EducationsAggregateArgs>): Prisma.PrismaPromise<GetEducationsAggregateType<T>>

    /**
     * Group by Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {educationsGroupByArgs} args - Group by arguments.
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
      T extends educationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: educationsGroupByArgs['orderBy'] }
        : { orderBy?: educationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, educationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the educations model
   */
  readonly fields: educationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for educations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__educationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends educations$resumeArgs<ExtArgs> = {}>(args?: Subset<T, educations$resumeArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    description_points<T extends educations$description_pointsArgs<ExtArgs> = {}>(args?: Subset<T, educations$description_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the educations model
   */
  interface educationsFieldRefs {
    readonly id: FieldRef<"educations", 'BigInt'>
    readonly school: FieldRef<"educations", 'String'>
    readonly education_name: FieldRef<"educations", 'String'>
    readonly start_date: FieldRef<"educations", 'String'>
    readonly end_date: FieldRef<"educations", 'String'>
    readonly resume_id: FieldRef<"educations", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * educations findUnique
   */
  export type educationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where: educationsWhereUniqueInput
  }

  /**
   * educations findUniqueOrThrow
   */
  export type educationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where: educationsWhereUniqueInput
  }

  /**
   * educations findFirst
   */
  export type educationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where?: educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationsOrderByWithRelationInput | educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationsScalarFieldEnum | EducationsScalarFieldEnum[]
  }

  /**
   * educations findFirstOrThrow
   */
  export type educationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where?: educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationsOrderByWithRelationInput | educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for educations.
     */
    cursor?: educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of educations.
     */
    distinct?: EducationsScalarFieldEnum | EducationsScalarFieldEnum[]
  }

  /**
   * educations findMany
   */
  export type educationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter, which educations to fetch.
     */
    where?: educationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of educations to fetch.
     */
    orderBy?: educationsOrderByWithRelationInput | educationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing educations.
     */
    cursor?: educationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` educations.
     */
    skip?: number
    distinct?: EducationsScalarFieldEnum | EducationsScalarFieldEnum[]
  }

  /**
   * educations create
   */
  export type educationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * The data needed to create a educations.
     */
    data?: XOR<educationsCreateInput, educationsUncheckedCreateInput>
  }

  /**
   * educations createMany
   */
  export type educationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many educations.
     */
    data: educationsCreateManyInput | educationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * educations createManyAndReturn
   */
  export type educationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * The data used to create many educations.
     */
    data: educationsCreateManyInput | educationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * educations update
   */
  export type educationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * The data needed to update a educations.
     */
    data: XOR<educationsUpdateInput, educationsUncheckedUpdateInput>
    /**
     * Choose, which educations to update.
     */
    where: educationsWhereUniqueInput
  }

  /**
   * educations updateMany
   */
  export type educationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update educations.
     */
    data: XOR<educationsUpdateManyMutationInput, educationsUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationsWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
  }

  /**
   * educations updateManyAndReturn
   */
  export type educationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * The data used to update educations.
     */
    data: XOR<educationsUpdateManyMutationInput, educationsUncheckedUpdateManyInput>
    /**
     * Filter which educations to update
     */
    where?: educationsWhereInput
    /**
     * Limit how many educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * educations upsert
   */
  export type educationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * The filter to search for the educations to update in case it exists.
     */
    where: educationsWhereUniqueInput
    /**
     * In case the educations found by the `where` argument doesn't exist, create a new educations with this data.
     */
    create: XOR<educationsCreateInput, educationsUncheckedCreateInput>
    /**
     * In case the educations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<educationsUpdateInput, educationsUncheckedUpdateInput>
  }

  /**
   * educations delete
   */
  export type educationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
    /**
     * Filter which educations to delete.
     */
    where: educationsWhereUniqueInput
  }

  /**
   * educations deleteMany
   */
  export type educationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which educations to delete
     */
    where?: educationsWhereInput
    /**
     * Limit how many educations to delete.
     */
    limit?: number
  }

  /**
   * educations.resume
   */
  export type educations$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    where?: resumesWhereInput
  }

  /**
   * educations.description_points
   */
  export type educations$description_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    where?: EducationDescriptionPointsWhereInput
    orderBy?: EducationDescriptionPointsOrderByWithRelationInput | EducationDescriptionPointsOrderByWithRelationInput[]
    cursor?: EducationDescriptionPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationDescriptionPointsScalarFieldEnum | EducationDescriptionPointsScalarFieldEnum[]
  }

  /**
   * educations without action
   */
  export type educationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the educations
     */
    select?: educationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the educations
     */
    omit?: educationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: educationsInclude<ExtArgs> | null
  }


  /**
   * Model EducationDescriptionPoints
   */

  export type AggregateEducationDescriptionPoints = {
    _count: EducationDescriptionPointsCountAggregateOutputType | null
    _avg: EducationDescriptionPointsAvgAggregateOutputType | null
    _sum: EducationDescriptionPointsSumAggregateOutputType | null
    _min: EducationDescriptionPointsMinAggregateOutputType | null
    _max: EducationDescriptionPointsMaxAggregateOutputType | null
  }

  export type EducationDescriptionPointsAvgAggregateOutputType = {
    id: number | null
    education_entity_id: number | null
  }

  export type EducationDescriptionPointsSumAggregateOutputType = {
    id: bigint | null
    education_entity_id: bigint | null
  }

  export type EducationDescriptionPointsMinAggregateOutputType = {
    id: bigint | null
    education_entity_id: bigint | null
    description_point: string | null
  }

  export type EducationDescriptionPointsMaxAggregateOutputType = {
    id: bigint | null
    education_entity_id: bigint | null
    description_point: string | null
  }

  export type EducationDescriptionPointsCountAggregateOutputType = {
    id: number
    education_entity_id: number
    description_point: number
    _all: number
  }


  export type EducationDescriptionPointsAvgAggregateInputType = {
    id?: true
    education_entity_id?: true
  }

  export type EducationDescriptionPointsSumAggregateInputType = {
    id?: true
    education_entity_id?: true
  }

  export type EducationDescriptionPointsMinAggregateInputType = {
    id?: true
    education_entity_id?: true
    description_point?: true
  }

  export type EducationDescriptionPointsMaxAggregateInputType = {
    id?: true
    education_entity_id?: true
    description_point?: true
  }

  export type EducationDescriptionPointsCountAggregateInputType = {
    id?: true
    education_entity_id?: true
    description_point?: true
    _all?: true
  }

  export type EducationDescriptionPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationDescriptionPoints to aggregate.
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDescriptionPoints to fetch.
     */
    orderBy?: EducationDescriptionPointsOrderByWithRelationInput | EducationDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationDescriptionPoints
    **/
    _count?: true | EducationDescriptionPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationDescriptionPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationDescriptionPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationDescriptionPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationDescriptionPointsMaxAggregateInputType
  }

  export type GetEducationDescriptionPointsAggregateType<T extends EducationDescriptionPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationDescriptionPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationDescriptionPoints[P]>
      : GetScalarType<T[P], AggregateEducationDescriptionPoints[P]>
  }




  export type EducationDescriptionPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationDescriptionPointsWhereInput
    orderBy?: EducationDescriptionPointsOrderByWithAggregationInput | EducationDescriptionPointsOrderByWithAggregationInput[]
    by: EducationDescriptionPointsScalarFieldEnum[] | EducationDescriptionPointsScalarFieldEnum
    having?: EducationDescriptionPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationDescriptionPointsCountAggregateInputType | true
    _avg?: EducationDescriptionPointsAvgAggregateInputType
    _sum?: EducationDescriptionPointsSumAggregateInputType
    _min?: EducationDescriptionPointsMinAggregateInputType
    _max?: EducationDescriptionPointsMaxAggregateInputType
  }

  export type EducationDescriptionPointsGroupByOutputType = {
    id: bigint
    education_entity_id: bigint
    description_point: string | null
    _count: EducationDescriptionPointsCountAggregateOutputType | null
    _avg: EducationDescriptionPointsAvgAggregateOutputType | null
    _sum: EducationDescriptionPointsSumAggregateOutputType | null
    _min: EducationDescriptionPointsMinAggregateOutputType | null
    _max: EducationDescriptionPointsMaxAggregateOutputType | null
  }

  type GetEducationDescriptionPointsGroupByPayload<T extends EducationDescriptionPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationDescriptionPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationDescriptionPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationDescriptionPointsGroupByOutputType[P]>
            : GetScalarType<T[P], EducationDescriptionPointsGroupByOutputType[P]>
        }
      >
    >


  export type EducationDescriptionPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education_entity_id?: boolean
    description_point?: boolean
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDescriptionPoints"]>

  export type EducationDescriptionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education_entity_id?: boolean
    description_point?: boolean
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDescriptionPoints"]>

  export type EducationDescriptionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education_entity_id?: boolean
    description_point?: boolean
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationDescriptionPoints"]>

  export type EducationDescriptionPointsSelectScalar = {
    id?: boolean
    education_entity_id?: boolean
    description_point?: boolean
  }

  export type EducationDescriptionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "education_entity_id" | "description_point", ExtArgs["result"]["educationDescriptionPoints"]>
  export type EducationDescriptionPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }
  export type EducationDescriptionPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }
  export type EducationDescriptionPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | educationsDefaultArgs<ExtArgs>
  }

  export type $EducationDescriptionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationDescriptionPoints"
    objects: {
      education: Prisma.$educationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      education_entity_id: bigint
      description_point: string | null
    }, ExtArgs["result"]["educationDescriptionPoints"]>
    composites: {}
  }

  type EducationDescriptionPointsGetPayload<S extends boolean | null | undefined | EducationDescriptionPointsDefaultArgs> = $Result.GetResult<Prisma.$EducationDescriptionPointsPayload, S>

  type EducationDescriptionPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationDescriptionPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationDescriptionPointsCountAggregateInputType | true
    }

  export interface EducationDescriptionPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationDescriptionPoints'], meta: { name: 'EducationDescriptionPoints' } }
    /**
     * Find zero or one EducationDescriptionPoints that matches the filter.
     * @param {EducationDescriptionPointsFindUniqueArgs} args - Arguments to find a EducationDescriptionPoints
     * @example
     * // Get one EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationDescriptionPointsFindUniqueArgs>(args: SelectSubset<T, EducationDescriptionPointsFindUniqueArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EducationDescriptionPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationDescriptionPointsFindUniqueOrThrowArgs} args - Arguments to find a EducationDescriptionPoints
     * @example
     * // Get one EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationDescriptionPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationDescriptionPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationDescriptionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsFindFirstArgs} args - Arguments to find a EducationDescriptionPoints
     * @example
     * // Get one EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationDescriptionPointsFindFirstArgs>(args?: SelectSubset<T, EducationDescriptionPointsFindFirstArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EducationDescriptionPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsFindFirstOrThrowArgs} args - Arguments to find a EducationDescriptionPoints
     * @example
     * // Get one EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationDescriptionPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationDescriptionPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EducationDescriptionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findMany()
     * 
     * // Get first 10 EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationDescriptionPointsWithIdOnly = await prisma.educationDescriptionPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationDescriptionPointsFindManyArgs>(args?: SelectSubset<T, EducationDescriptionPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EducationDescriptionPoints.
     * @param {EducationDescriptionPointsCreateArgs} args - Arguments to create a EducationDescriptionPoints.
     * @example
     * // Create one EducationDescriptionPoints
     * const EducationDescriptionPoints = await prisma.educationDescriptionPoints.create({
     *   data: {
     *     // ... data to create a EducationDescriptionPoints
     *   }
     * })
     * 
     */
    create<T extends EducationDescriptionPointsCreateArgs>(args: SelectSubset<T, EducationDescriptionPointsCreateArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EducationDescriptionPoints.
     * @param {EducationDescriptionPointsCreateManyArgs} args - Arguments to create many EducationDescriptionPoints.
     * @example
     * // Create many EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationDescriptionPointsCreateManyArgs>(args?: SelectSubset<T, EducationDescriptionPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationDescriptionPoints and returns the data saved in the database.
     * @param {EducationDescriptionPointsCreateManyAndReturnArgs} args - Arguments to create many EducationDescriptionPoints.
     * @example
     * // Create many EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationDescriptionPoints and only return the `id`
     * const educationDescriptionPointsWithIdOnly = await prisma.educationDescriptionPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationDescriptionPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationDescriptionPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EducationDescriptionPoints.
     * @param {EducationDescriptionPointsDeleteArgs} args - Arguments to delete one EducationDescriptionPoints.
     * @example
     * // Delete one EducationDescriptionPoints
     * const EducationDescriptionPoints = await prisma.educationDescriptionPoints.delete({
     *   where: {
     *     // ... filter to delete one EducationDescriptionPoints
     *   }
     * })
     * 
     */
    delete<T extends EducationDescriptionPointsDeleteArgs>(args: SelectSubset<T, EducationDescriptionPointsDeleteArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EducationDescriptionPoints.
     * @param {EducationDescriptionPointsUpdateArgs} args - Arguments to update one EducationDescriptionPoints.
     * @example
     * // Update one EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationDescriptionPointsUpdateArgs>(args: SelectSubset<T, EducationDescriptionPointsUpdateArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EducationDescriptionPoints.
     * @param {EducationDescriptionPointsDeleteManyArgs} args - Arguments to filter EducationDescriptionPoints to delete.
     * @example
     * // Delete a few EducationDescriptionPoints
     * const { count } = await prisma.educationDescriptionPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDescriptionPointsDeleteManyArgs>(args?: SelectSubset<T, EducationDescriptionPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationDescriptionPointsUpdateManyArgs>(args: SelectSubset<T, EducationDescriptionPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationDescriptionPoints and returns the data updated in the database.
     * @param {EducationDescriptionPointsUpdateManyAndReturnArgs} args - Arguments to update many EducationDescriptionPoints.
     * @example
     * // Update many EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EducationDescriptionPoints and only return the `id`
     * const educationDescriptionPointsWithIdOnly = await prisma.educationDescriptionPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationDescriptionPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationDescriptionPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EducationDescriptionPoints.
     * @param {EducationDescriptionPointsUpsertArgs} args - Arguments to update or create a EducationDescriptionPoints.
     * @example
     * // Update or create a EducationDescriptionPoints
     * const educationDescriptionPoints = await prisma.educationDescriptionPoints.upsert({
     *   create: {
     *     // ... data to create a EducationDescriptionPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationDescriptionPoints we want to update
     *   }
     * })
     */
    upsert<T extends EducationDescriptionPointsUpsertArgs>(args: SelectSubset<T, EducationDescriptionPointsUpsertArgs<ExtArgs>>): Prisma__EducationDescriptionPointsClient<$Result.GetResult<Prisma.$EducationDescriptionPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EducationDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsCountArgs} args - Arguments to filter EducationDescriptionPoints to count.
     * @example
     * // Count the number of EducationDescriptionPoints
     * const count = await prisma.educationDescriptionPoints.count({
     *   where: {
     *     // ... the filter for the EducationDescriptionPoints we want to count
     *   }
     * })
    **/
    count<T extends EducationDescriptionPointsCountArgs>(
      args?: Subset<T, EducationDescriptionPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationDescriptionPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationDescriptionPointsAggregateArgs>(args: Subset<T, EducationDescriptionPointsAggregateArgs>): Prisma.PrismaPromise<GetEducationDescriptionPointsAggregateType<T>>

    /**
     * Group by EducationDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationDescriptionPointsGroupByArgs} args - Group by arguments.
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
      T extends EducationDescriptionPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationDescriptionPointsGroupByArgs['orderBy'] }
        : { orderBy?: EducationDescriptionPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationDescriptionPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationDescriptionPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationDescriptionPoints model
   */
  readonly fields: EducationDescriptionPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationDescriptionPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationDescriptionPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends educationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, educationsDefaultArgs<ExtArgs>>): Prisma__educationsClient<$Result.GetResult<Prisma.$educationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EducationDescriptionPoints model
   */
  interface EducationDescriptionPointsFieldRefs {
    readonly id: FieldRef<"EducationDescriptionPoints", 'BigInt'>
    readonly education_entity_id: FieldRef<"EducationDescriptionPoints", 'BigInt'>
    readonly description_point: FieldRef<"EducationDescriptionPoints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EducationDescriptionPoints findUnique
   */
  export type EducationDescriptionPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which EducationDescriptionPoints to fetch.
     */
    where: EducationDescriptionPointsWhereUniqueInput
  }

  /**
   * EducationDescriptionPoints findUniqueOrThrow
   */
  export type EducationDescriptionPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which EducationDescriptionPoints to fetch.
     */
    where: EducationDescriptionPointsWhereUniqueInput
  }

  /**
   * EducationDescriptionPoints findFirst
   */
  export type EducationDescriptionPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which EducationDescriptionPoints to fetch.
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDescriptionPoints to fetch.
     */
    orderBy?: EducationDescriptionPointsOrderByWithRelationInput | EducationDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationDescriptionPoints.
     */
    cursor?: EducationDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationDescriptionPoints.
     */
    distinct?: EducationDescriptionPointsScalarFieldEnum | EducationDescriptionPointsScalarFieldEnum[]
  }

  /**
   * EducationDescriptionPoints findFirstOrThrow
   */
  export type EducationDescriptionPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which EducationDescriptionPoints to fetch.
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDescriptionPoints to fetch.
     */
    orderBy?: EducationDescriptionPointsOrderByWithRelationInput | EducationDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationDescriptionPoints.
     */
    cursor?: EducationDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationDescriptionPoints.
     */
    distinct?: EducationDescriptionPointsScalarFieldEnum | EducationDescriptionPointsScalarFieldEnum[]
  }

  /**
   * EducationDescriptionPoints findMany
   */
  export type EducationDescriptionPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which EducationDescriptionPoints to fetch.
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationDescriptionPoints to fetch.
     */
    orderBy?: EducationDescriptionPointsOrderByWithRelationInput | EducationDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationDescriptionPoints.
     */
    cursor?: EducationDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationDescriptionPoints.
     */
    skip?: number
    distinct?: EducationDescriptionPointsScalarFieldEnum | EducationDescriptionPointsScalarFieldEnum[]
  }

  /**
   * EducationDescriptionPoints create
   */
  export type EducationDescriptionPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a EducationDescriptionPoints.
     */
    data: XOR<EducationDescriptionPointsCreateInput, EducationDescriptionPointsUncheckedCreateInput>
  }

  /**
   * EducationDescriptionPoints createMany
   */
  export type EducationDescriptionPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationDescriptionPoints.
     */
    data: EducationDescriptionPointsCreateManyInput | EducationDescriptionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EducationDescriptionPoints createManyAndReturn
   */
  export type EducationDescriptionPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * The data used to create many EducationDescriptionPoints.
     */
    data: EducationDescriptionPointsCreateManyInput | EducationDescriptionPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationDescriptionPoints update
   */
  export type EducationDescriptionPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a EducationDescriptionPoints.
     */
    data: XOR<EducationDescriptionPointsUpdateInput, EducationDescriptionPointsUncheckedUpdateInput>
    /**
     * Choose, which EducationDescriptionPoints to update.
     */
    where: EducationDescriptionPointsWhereUniqueInput
  }

  /**
   * EducationDescriptionPoints updateMany
   */
  export type EducationDescriptionPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationDescriptionPoints.
     */
    data: XOR<EducationDescriptionPointsUpdateManyMutationInput, EducationDescriptionPointsUncheckedUpdateManyInput>
    /**
     * Filter which EducationDescriptionPoints to update
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * Limit how many EducationDescriptionPoints to update.
     */
    limit?: number
  }

  /**
   * EducationDescriptionPoints updateManyAndReturn
   */
  export type EducationDescriptionPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * The data used to update EducationDescriptionPoints.
     */
    data: XOR<EducationDescriptionPointsUpdateManyMutationInput, EducationDescriptionPointsUncheckedUpdateManyInput>
    /**
     * Filter which EducationDescriptionPoints to update
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * Limit how many EducationDescriptionPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EducationDescriptionPoints upsert
   */
  export type EducationDescriptionPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the EducationDescriptionPoints to update in case it exists.
     */
    where: EducationDescriptionPointsWhereUniqueInput
    /**
     * In case the EducationDescriptionPoints found by the `where` argument doesn't exist, create a new EducationDescriptionPoints with this data.
     */
    create: XOR<EducationDescriptionPointsCreateInput, EducationDescriptionPointsUncheckedCreateInput>
    /**
     * In case the EducationDescriptionPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationDescriptionPointsUpdateInput, EducationDescriptionPointsUncheckedUpdateInput>
  }

  /**
   * EducationDescriptionPoints delete
   */
  export type EducationDescriptionPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter which EducationDescriptionPoints to delete.
     */
    where: EducationDescriptionPointsWhereUniqueInput
  }

  /**
   * EducationDescriptionPoints deleteMany
   */
  export type EducationDescriptionPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationDescriptionPoints to delete
     */
    where?: EducationDescriptionPointsWhereInput
    /**
     * Limit how many EducationDescriptionPoints to delete.
     */
    limit?: number
  }

  /**
   * EducationDescriptionPoints without action
   */
  export type EducationDescriptionPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationDescriptionPoints
     */
    select?: EducationDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EducationDescriptionPoints
     */
    omit?: EducationDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationDescriptionPointsInclude<ExtArgs> | null
  }


  /**
   * Model work_experiences
   */

  export type AggregateWork_experiences = {
    _count: Work_experiencesCountAggregateOutputType | null
    _avg: Work_experiencesAvgAggregateOutputType | null
    _sum: Work_experiencesSumAggregateOutputType | null
    _min: Work_experiencesMinAggregateOutputType | null
    _max: Work_experiencesMaxAggregateOutputType | null
  }

  export type Work_experiencesAvgAggregateOutputType = {
    id: number | null
    resume_id: number | null
  }

  export type Work_experiencesSumAggregateOutputType = {
    id: bigint | null
    resume_id: bigint | null
  }

  export type Work_experiencesMinAggregateOutputType = {
    id: bigint | null
    company: string | null
    position: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
  }

  export type Work_experiencesMaxAggregateOutputType = {
    id: bigint | null
    company: string | null
    position: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
  }

  export type Work_experiencesCountAggregateOutputType = {
    id: number
    company: number
    position: number
    start_date: number
    end_date: number
    resume_id: number
    _all: number
  }


  export type Work_experiencesAvgAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type Work_experiencesSumAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type Work_experiencesMinAggregateInputType = {
    id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    resume_id?: true
  }

  export type Work_experiencesMaxAggregateInputType = {
    id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    resume_id?: true
  }

  export type Work_experiencesCountAggregateInputType = {
    id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    resume_id?: true
    _all?: true
  }

  export type Work_experiencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_experiences to aggregate.
     */
    where?: work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_experiences to fetch.
     */
    orderBy?: work_experiencesOrderByWithRelationInput | work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_experiences
    **/
    _count?: true | Work_experiencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Work_experiencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Work_experiencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_experiencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_experiencesMaxAggregateInputType
  }

  export type GetWork_experiencesAggregateType<T extends Work_experiencesAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_experiences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_experiences[P]>
      : GetScalarType<T[P], AggregateWork_experiences[P]>
  }




  export type work_experiencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_experiencesWhereInput
    orderBy?: work_experiencesOrderByWithAggregationInput | work_experiencesOrderByWithAggregationInput[]
    by: Work_experiencesScalarFieldEnum[] | Work_experiencesScalarFieldEnum
    having?: work_experiencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_experiencesCountAggregateInputType | true
    _avg?: Work_experiencesAvgAggregateInputType
    _sum?: Work_experiencesSumAggregateInputType
    _min?: Work_experiencesMinAggregateInputType
    _max?: Work_experiencesMaxAggregateInputType
  }

  export type Work_experiencesGroupByOutputType = {
    id: bigint
    company: string | null
    position: string | null
    start_date: string | null
    end_date: string | null
    resume_id: bigint | null
    _count: Work_experiencesCountAggregateOutputType | null
    _avg: Work_experiencesAvgAggregateOutputType | null
    _sum: Work_experiencesSumAggregateOutputType | null
    _min: Work_experiencesMinAggregateOutputType | null
    _max: Work_experiencesMaxAggregateOutputType | null
  }

  type GetWork_experiencesGroupByPayload<T extends work_experiencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_experiencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_experiencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_experiencesGroupByOutputType[P]>
            : GetScalarType<T[P], Work_experiencesGroupByOutputType[P]>
        }
      >
    >


  export type work_experiencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
    description_points?: boolean | work_experiences$description_pointsArgs<ExtArgs>
    _count?: boolean | Work_experiencesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["work_experiences"]>

  export type work_experiencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["work_experiences"]>

  export type work_experiencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["work_experiences"]>

  export type work_experiencesSelectScalar = {
    id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    resume_id?: boolean
  }

  export type work_experiencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "position" | "start_date" | "end_date" | "resume_id", ExtArgs["result"]["work_experiences"]>
  export type work_experiencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
    description_points?: boolean | work_experiences$description_pointsArgs<ExtArgs>
    _count?: boolean | Work_experiencesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type work_experiencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
  }
  export type work_experiencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | work_experiences$resumeArgs<ExtArgs>
  }

  export type $work_experiencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_experiences"
    objects: {
      resume: Prisma.$resumesPayload<ExtArgs> | null
      description_points: Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      company: string | null
      position: string | null
      start_date: string | null
      end_date: string | null
      resume_id: bigint | null
    }, ExtArgs["result"]["work_experiences"]>
    composites: {}
  }

  type work_experiencesGetPayload<S extends boolean | null | undefined | work_experiencesDefaultArgs> = $Result.GetResult<Prisma.$work_experiencesPayload, S>

  type work_experiencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_experiencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_experiencesCountAggregateInputType | true
    }

  export interface work_experiencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_experiences'], meta: { name: 'work_experiences' } }
    /**
     * Find zero or one Work_experiences that matches the filter.
     * @param {work_experiencesFindUniqueArgs} args - Arguments to find a Work_experiences
     * @example
     * // Get one Work_experiences
     * const work_experiences = await prisma.work_experiences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_experiencesFindUniqueArgs>(args: SelectSubset<T, work_experiencesFindUniqueArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_experiences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_experiencesFindUniqueOrThrowArgs} args - Arguments to find a Work_experiences
     * @example
     * // Get one Work_experiences
     * const work_experiences = await prisma.work_experiences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_experiencesFindUniqueOrThrowArgs>(args: SelectSubset<T, work_experiencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesFindFirstArgs} args - Arguments to find a Work_experiences
     * @example
     * // Get one Work_experiences
     * const work_experiences = await prisma.work_experiences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_experiencesFindFirstArgs>(args?: SelectSubset<T, work_experiencesFindFirstArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_experiences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesFindFirstOrThrowArgs} args - Arguments to find a Work_experiences
     * @example
     * // Get one Work_experiences
     * const work_experiences = await prisma.work_experiences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_experiencesFindFirstOrThrowArgs>(args?: SelectSubset<T, work_experiencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_experiences
     * const work_experiences = await prisma.work_experiences.findMany()
     * 
     * // Get first 10 Work_experiences
     * const work_experiences = await prisma.work_experiences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_experiencesWithIdOnly = await prisma.work_experiences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_experiencesFindManyArgs>(args?: SelectSubset<T, work_experiencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_experiences.
     * @param {work_experiencesCreateArgs} args - Arguments to create a Work_experiences.
     * @example
     * // Create one Work_experiences
     * const Work_experiences = await prisma.work_experiences.create({
     *   data: {
     *     // ... data to create a Work_experiences
     *   }
     * })
     * 
     */
    create<T extends work_experiencesCreateArgs>(args: SelectSubset<T, work_experiencesCreateArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_experiences.
     * @param {work_experiencesCreateManyArgs} args - Arguments to create many Work_experiences.
     * @example
     * // Create many Work_experiences
     * const work_experiences = await prisma.work_experiences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_experiencesCreateManyArgs>(args?: SelectSubset<T, work_experiencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_experiences and returns the data saved in the database.
     * @param {work_experiencesCreateManyAndReturnArgs} args - Arguments to create many Work_experiences.
     * @example
     * // Create many Work_experiences
     * const work_experiences = await prisma.work_experiences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_experiences and only return the `id`
     * const work_experiencesWithIdOnly = await prisma.work_experiences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_experiencesCreateManyAndReturnArgs>(args?: SelectSubset<T, work_experiencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_experiences.
     * @param {work_experiencesDeleteArgs} args - Arguments to delete one Work_experiences.
     * @example
     * // Delete one Work_experiences
     * const Work_experiences = await prisma.work_experiences.delete({
     *   where: {
     *     // ... filter to delete one Work_experiences
     *   }
     * })
     * 
     */
    delete<T extends work_experiencesDeleteArgs>(args: SelectSubset<T, work_experiencesDeleteArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_experiences.
     * @param {work_experiencesUpdateArgs} args - Arguments to update one Work_experiences.
     * @example
     * // Update one Work_experiences
     * const work_experiences = await prisma.work_experiences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_experiencesUpdateArgs>(args: SelectSubset<T, work_experiencesUpdateArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_experiences.
     * @param {work_experiencesDeleteManyArgs} args - Arguments to filter Work_experiences to delete.
     * @example
     * // Delete a few Work_experiences
     * const { count } = await prisma.work_experiences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_experiencesDeleteManyArgs>(args?: SelectSubset<T, work_experiencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_experiences
     * const work_experiences = await prisma.work_experiences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_experiencesUpdateManyArgs>(args: SelectSubset<T, work_experiencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_experiences and returns the data updated in the database.
     * @param {work_experiencesUpdateManyAndReturnArgs} args - Arguments to update many Work_experiences.
     * @example
     * // Update many Work_experiences
     * const work_experiences = await prisma.work_experiences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_experiences and only return the `id`
     * const work_experiencesWithIdOnly = await prisma.work_experiences.updateManyAndReturn({
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
    updateManyAndReturn<T extends work_experiencesUpdateManyAndReturnArgs>(args: SelectSubset<T, work_experiencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_experiences.
     * @param {work_experiencesUpsertArgs} args - Arguments to update or create a Work_experiences.
     * @example
     * // Update or create a Work_experiences
     * const work_experiences = await prisma.work_experiences.upsert({
     *   create: {
     *     // ... data to create a Work_experiences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_experiences we want to update
     *   }
     * })
     */
    upsert<T extends work_experiencesUpsertArgs>(args: SelectSubset<T, work_experiencesUpsertArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesCountArgs} args - Arguments to filter Work_experiences to count.
     * @example
     * // Count the number of Work_experiences
     * const count = await prisma.work_experiences.count({
     *   where: {
     *     // ... the filter for the Work_experiences we want to count
     *   }
     * })
    **/
    count<T extends work_experiencesCountArgs>(
      args?: Subset<T, work_experiencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_experiencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_experiencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Work_experiencesAggregateArgs>(args: Subset<T, Work_experiencesAggregateArgs>): Prisma.PrismaPromise<GetWork_experiencesAggregateType<T>>

    /**
     * Group by Work_experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_experiencesGroupByArgs} args - Group by arguments.
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
      T extends work_experiencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_experiencesGroupByArgs['orderBy'] }
        : { orderBy?: work_experiencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, work_experiencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_experiencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_experiences model
   */
  readonly fields: work_experiencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_experiences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_experiencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends work_experiences$resumeArgs<ExtArgs> = {}>(args?: Subset<T, work_experiences$resumeArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    description_points<T extends work_experiences$description_pointsArgs<ExtArgs> = {}>(args?: Subset<T, work_experiences$description_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the work_experiences model
   */
  interface work_experiencesFieldRefs {
    readonly id: FieldRef<"work_experiences", 'BigInt'>
    readonly company: FieldRef<"work_experiences", 'String'>
    readonly position: FieldRef<"work_experiences", 'String'>
    readonly start_date: FieldRef<"work_experiences", 'String'>
    readonly end_date: FieldRef<"work_experiences", 'String'>
    readonly resume_id: FieldRef<"work_experiences", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * work_experiences findUnique
   */
  export type work_experiencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which work_experiences to fetch.
     */
    where: work_experiencesWhereUniqueInput
  }

  /**
   * work_experiences findUniqueOrThrow
   */
  export type work_experiencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which work_experiences to fetch.
     */
    where: work_experiencesWhereUniqueInput
  }

  /**
   * work_experiences findFirst
   */
  export type work_experiencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which work_experiences to fetch.
     */
    where?: work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_experiences to fetch.
     */
    orderBy?: work_experiencesOrderByWithRelationInput | work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_experiences.
     */
    cursor?: work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_experiences.
     */
    distinct?: Work_experiencesScalarFieldEnum | Work_experiencesScalarFieldEnum[]
  }

  /**
   * work_experiences findFirstOrThrow
   */
  export type work_experiencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which work_experiences to fetch.
     */
    where?: work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_experiences to fetch.
     */
    orderBy?: work_experiencesOrderByWithRelationInput | work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_experiences.
     */
    cursor?: work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_experiences.
     */
    distinct?: Work_experiencesScalarFieldEnum | Work_experiencesScalarFieldEnum[]
  }

  /**
   * work_experiences findMany
   */
  export type work_experiencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter, which work_experiences to fetch.
     */
    where?: work_experiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_experiences to fetch.
     */
    orderBy?: work_experiencesOrderByWithRelationInput | work_experiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_experiences.
     */
    cursor?: work_experiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_experiences.
     */
    skip?: number
    distinct?: Work_experiencesScalarFieldEnum | Work_experiencesScalarFieldEnum[]
  }

  /**
   * work_experiences create
   */
  export type work_experiencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * The data needed to create a work_experiences.
     */
    data?: XOR<work_experiencesCreateInput, work_experiencesUncheckedCreateInput>
  }

  /**
   * work_experiences createMany
   */
  export type work_experiencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_experiences.
     */
    data: work_experiencesCreateManyInput | work_experiencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_experiences createManyAndReturn
   */
  export type work_experiencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * The data used to create many work_experiences.
     */
    data: work_experiencesCreateManyInput | work_experiencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_experiences update
   */
  export type work_experiencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * The data needed to update a work_experiences.
     */
    data: XOR<work_experiencesUpdateInput, work_experiencesUncheckedUpdateInput>
    /**
     * Choose, which work_experiences to update.
     */
    where: work_experiencesWhereUniqueInput
  }

  /**
   * work_experiences updateMany
   */
  export type work_experiencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_experiences.
     */
    data: XOR<work_experiencesUpdateManyMutationInput, work_experiencesUncheckedUpdateManyInput>
    /**
     * Filter which work_experiences to update
     */
    where?: work_experiencesWhereInput
    /**
     * Limit how many work_experiences to update.
     */
    limit?: number
  }

  /**
   * work_experiences updateManyAndReturn
   */
  export type work_experiencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * The data used to update work_experiences.
     */
    data: XOR<work_experiencesUpdateManyMutationInput, work_experiencesUncheckedUpdateManyInput>
    /**
     * Filter which work_experiences to update
     */
    where?: work_experiencesWhereInput
    /**
     * Limit how many work_experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_experiences upsert
   */
  export type work_experiencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * The filter to search for the work_experiences to update in case it exists.
     */
    where: work_experiencesWhereUniqueInput
    /**
     * In case the work_experiences found by the `where` argument doesn't exist, create a new work_experiences with this data.
     */
    create: XOR<work_experiencesCreateInput, work_experiencesUncheckedCreateInput>
    /**
     * In case the work_experiences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_experiencesUpdateInput, work_experiencesUncheckedUpdateInput>
  }

  /**
   * work_experiences delete
   */
  export type work_experiencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
    /**
     * Filter which work_experiences to delete.
     */
    where: work_experiencesWhereUniqueInput
  }

  /**
   * work_experiences deleteMany
   */
  export type work_experiencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_experiences to delete
     */
    where?: work_experiencesWhereInput
    /**
     * Limit how many work_experiences to delete.
     */
    limit?: number
  }

  /**
   * work_experiences.resume
   */
  export type work_experiences$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    where?: resumesWhereInput
  }

  /**
   * work_experiences.description_points
   */
  export type work_experiences$description_pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    where?: WorkExperienceDescriptionPointsWhereInput
    orderBy?: WorkExperienceDescriptionPointsOrderByWithRelationInput | WorkExperienceDescriptionPointsOrderByWithRelationInput[]
    cursor?: WorkExperienceDescriptionPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceDescriptionPointsScalarFieldEnum | WorkExperienceDescriptionPointsScalarFieldEnum[]
  }

  /**
   * work_experiences without action
   */
  export type work_experiencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_experiences
     */
    select?: work_experiencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_experiences
     */
    omit?: work_experiencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_experiencesInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperienceDescriptionPoints
   */

  export type AggregateWorkExperienceDescriptionPoints = {
    _count: WorkExperienceDescriptionPointsCountAggregateOutputType | null
    _avg: WorkExperienceDescriptionPointsAvgAggregateOutputType | null
    _sum: WorkExperienceDescriptionPointsSumAggregateOutputType | null
    _min: WorkExperienceDescriptionPointsMinAggregateOutputType | null
    _max: WorkExperienceDescriptionPointsMaxAggregateOutputType | null
  }

  export type WorkExperienceDescriptionPointsAvgAggregateOutputType = {
    id: number | null
    work_experience_entity_id: number | null
  }

  export type WorkExperienceDescriptionPointsSumAggregateOutputType = {
    id: bigint | null
    work_experience_entity_id: bigint | null
  }

  export type WorkExperienceDescriptionPointsMinAggregateOutputType = {
    id: bigint | null
    work_experience_entity_id: bigint | null
    description_point: string | null
  }

  export type WorkExperienceDescriptionPointsMaxAggregateOutputType = {
    id: bigint | null
    work_experience_entity_id: bigint | null
    description_point: string | null
  }

  export type WorkExperienceDescriptionPointsCountAggregateOutputType = {
    id: number
    work_experience_entity_id: number
    description_point: number
    _all: number
  }


  export type WorkExperienceDescriptionPointsAvgAggregateInputType = {
    id?: true
    work_experience_entity_id?: true
  }

  export type WorkExperienceDescriptionPointsSumAggregateInputType = {
    id?: true
    work_experience_entity_id?: true
  }

  export type WorkExperienceDescriptionPointsMinAggregateInputType = {
    id?: true
    work_experience_entity_id?: true
    description_point?: true
  }

  export type WorkExperienceDescriptionPointsMaxAggregateInputType = {
    id?: true
    work_experience_entity_id?: true
    description_point?: true
  }

  export type WorkExperienceDescriptionPointsCountAggregateInputType = {
    id?: true
    work_experience_entity_id?: true
    description_point?: true
    _all?: true
  }

  export type WorkExperienceDescriptionPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperienceDescriptionPoints to aggregate.
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperienceDescriptionPoints to fetch.
     */
    orderBy?: WorkExperienceDescriptionPointsOrderByWithRelationInput | WorkExperienceDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperienceDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperienceDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperienceDescriptionPoints
    **/
    _count?: true | WorkExperienceDescriptionPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkExperienceDescriptionPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkExperienceDescriptionPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceDescriptionPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceDescriptionPointsMaxAggregateInputType
  }

  export type GetWorkExperienceDescriptionPointsAggregateType<T extends WorkExperienceDescriptionPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperienceDescriptionPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperienceDescriptionPoints[P]>
      : GetScalarType<T[P], AggregateWorkExperienceDescriptionPoints[P]>
  }




  export type WorkExperienceDescriptionPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceDescriptionPointsWhereInput
    orderBy?: WorkExperienceDescriptionPointsOrderByWithAggregationInput | WorkExperienceDescriptionPointsOrderByWithAggregationInput[]
    by: WorkExperienceDescriptionPointsScalarFieldEnum[] | WorkExperienceDescriptionPointsScalarFieldEnum
    having?: WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceDescriptionPointsCountAggregateInputType | true
    _avg?: WorkExperienceDescriptionPointsAvgAggregateInputType
    _sum?: WorkExperienceDescriptionPointsSumAggregateInputType
    _min?: WorkExperienceDescriptionPointsMinAggregateInputType
    _max?: WorkExperienceDescriptionPointsMaxAggregateInputType
  }

  export type WorkExperienceDescriptionPointsGroupByOutputType = {
    id: bigint
    work_experience_entity_id: bigint
    description_point: string | null
    _count: WorkExperienceDescriptionPointsCountAggregateOutputType | null
    _avg: WorkExperienceDescriptionPointsAvgAggregateOutputType | null
    _sum: WorkExperienceDescriptionPointsSumAggregateOutputType | null
    _min: WorkExperienceDescriptionPointsMinAggregateOutputType | null
    _max: WorkExperienceDescriptionPointsMaxAggregateOutputType | null
  }

  type GetWorkExperienceDescriptionPointsGroupByPayload<T extends WorkExperienceDescriptionPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceDescriptionPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceDescriptionPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceDescriptionPointsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceDescriptionPointsGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceDescriptionPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_experience_entity_id?: boolean
    description_point?: boolean
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperienceDescriptionPoints"]>

  export type WorkExperienceDescriptionPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_experience_entity_id?: boolean
    description_point?: boolean
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperienceDescriptionPoints"]>

  export type WorkExperienceDescriptionPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_experience_entity_id?: boolean
    description_point?: boolean
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperienceDescriptionPoints"]>

  export type WorkExperienceDescriptionPointsSelectScalar = {
    id?: boolean
    work_experience_entity_id?: boolean
    description_point?: boolean
  }

  export type WorkExperienceDescriptionPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "work_experience_entity_id" | "description_point", ExtArgs["result"]["workExperienceDescriptionPoints"]>
  export type WorkExperienceDescriptionPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }
  export type WorkExperienceDescriptionPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }
  export type WorkExperienceDescriptionPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_experience?: boolean | work_experiencesDefaultArgs<ExtArgs>
  }

  export type $WorkExperienceDescriptionPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperienceDescriptionPoints"
    objects: {
      work_experience: Prisma.$work_experiencesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      work_experience_entity_id: bigint
      description_point: string | null
    }, ExtArgs["result"]["workExperienceDescriptionPoints"]>
    composites: {}
  }

  type WorkExperienceDescriptionPointsGetPayload<S extends boolean | null | undefined | WorkExperienceDescriptionPointsDefaultArgs> = $Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload, S>

  type WorkExperienceDescriptionPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceDescriptionPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceDescriptionPointsCountAggregateInputType | true
    }

  export interface WorkExperienceDescriptionPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperienceDescriptionPoints'], meta: { name: 'WorkExperienceDescriptionPoints' } }
    /**
     * Find zero or one WorkExperienceDescriptionPoints that matches the filter.
     * @param {WorkExperienceDescriptionPointsFindUniqueArgs} args - Arguments to find a WorkExperienceDescriptionPoints
     * @example
     * // Get one WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceDescriptionPointsFindUniqueArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperienceDescriptionPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceDescriptionPointsFindUniqueOrThrowArgs} args - Arguments to find a WorkExperienceDescriptionPoints
     * @example
     * // Get one WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceDescriptionPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperienceDescriptionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsFindFirstArgs} args - Arguments to find a WorkExperienceDescriptionPoints
     * @example
     * // Get one WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceDescriptionPointsFindFirstArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperienceDescriptionPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsFindFirstOrThrowArgs} args - Arguments to find a WorkExperienceDescriptionPoints
     * @example
     * // Get one WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceDescriptionPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperienceDescriptionPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findMany()
     * 
     * // Get first 10 WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceDescriptionPointsWithIdOnly = await prisma.workExperienceDescriptionPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceDescriptionPointsFindManyArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsCreateArgs} args - Arguments to create a WorkExperienceDescriptionPoints.
     * @example
     * // Create one WorkExperienceDescriptionPoints
     * const WorkExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.create({
     *   data: {
     *     // ... data to create a WorkExperienceDescriptionPoints
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceDescriptionPointsCreateArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsCreateArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsCreateManyArgs} args - Arguments to create many WorkExperienceDescriptionPoints.
     * @example
     * // Create many WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceDescriptionPointsCreateManyArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkExperienceDescriptionPoints and returns the data saved in the database.
     * @param {WorkExperienceDescriptionPointsCreateManyAndReturnArgs} args - Arguments to create many WorkExperienceDescriptionPoints.
     * @example
     * // Create many WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkExperienceDescriptionPoints and only return the `id`
     * const workExperienceDescriptionPointsWithIdOnly = await prisma.workExperienceDescriptionPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkExperienceDescriptionPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsDeleteArgs} args - Arguments to delete one WorkExperienceDescriptionPoints.
     * @example
     * // Delete one WorkExperienceDescriptionPoints
     * const WorkExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.delete({
     *   where: {
     *     // ... filter to delete one WorkExperienceDescriptionPoints
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDescriptionPointsDeleteArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsDeleteArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsUpdateArgs} args - Arguments to update one WorkExperienceDescriptionPoints.
     * @example
     * // Update one WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceDescriptionPointsUpdateArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsUpdateArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsDeleteManyArgs} args - Arguments to filter WorkExperienceDescriptionPoints to delete.
     * @example
     * // Delete a few WorkExperienceDescriptionPoints
     * const { count } = await prisma.workExperienceDescriptionPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDescriptionPointsDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDescriptionPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperienceDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceDescriptionPointsUpdateManyArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperienceDescriptionPoints and returns the data updated in the database.
     * @param {WorkExperienceDescriptionPointsUpdateManyAndReturnArgs} args - Arguments to update many WorkExperienceDescriptionPoints.
     * @example
     * // Update many WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkExperienceDescriptionPoints and only return the `id`
     * const workExperienceDescriptionPointsWithIdOnly = await prisma.workExperienceDescriptionPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkExperienceDescriptionPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkExperienceDescriptionPoints.
     * @param {WorkExperienceDescriptionPointsUpsertArgs} args - Arguments to update or create a WorkExperienceDescriptionPoints.
     * @example
     * // Update or create a WorkExperienceDescriptionPoints
     * const workExperienceDescriptionPoints = await prisma.workExperienceDescriptionPoints.upsert({
     *   create: {
     *     // ... data to create a WorkExperienceDescriptionPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperienceDescriptionPoints we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceDescriptionPointsUpsertArgs>(args: SelectSubset<T, WorkExperienceDescriptionPointsUpsertArgs<ExtArgs>>): Prisma__WorkExperienceDescriptionPointsClient<$Result.GetResult<Prisma.$WorkExperienceDescriptionPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperienceDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsCountArgs} args - Arguments to filter WorkExperienceDescriptionPoints to count.
     * @example
     * // Count the number of WorkExperienceDescriptionPoints
     * const count = await prisma.workExperienceDescriptionPoints.count({
     *   where: {
     *     // ... the filter for the WorkExperienceDescriptionPoints we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceDescriptionPointsCountArgs>(
      args?: Subset<T, WorkExperienceDescriptionPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceDescriptionPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperienceDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkExperienceDescriptionPointsAggregateArgs>(args: Subset<T, WorkExperienceDescriptionPointsAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceDescriptionPointsAggregateType<T>>

    /**
     * Group by WorkExperienceDescriptionPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceDescriptionPointsGroupByArgs} args - Group by arguments.
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
      T extends WorkExperienceDescriptionPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceDescriptionPointsGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceDescriptionPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkExperienceDescriptionPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceDescriptionPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperienceDescriptionPoints model
   */
  readonly fields: WorkExperienceDescriptionPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperienceDescriptionPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceDescriptionPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work_experience<T extends work_experiencesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, work_experiencesDefaultArgs<ExtArgs>>): Prisma__work_experiencesClient<$Result.GetResult<Prisma.$work_experiencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkExperienceDescriptionPoints model
   */
  interface WorkExperienceDescriptionPointsFieldRefs {
    readonly id: FieldRef<"WorkExperienceDescriptionPoints", 'BigInt'>
    readonly work_experience_entity_id: FieldRef<"WorkExperienceDescriptionPoints", 'BigInt'>
    readonly description_point: FieldRef<"WorkExperienceDescriptionPoints", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperienceDescriptionPoints findUnique
   */
  export type WorkExperienceDescriptionPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperienceDescriptionPoints to fetch.
     */
    where: WorkExperienceDescriptionPointsWhereUniqueInput
  }

  /**
   * WorkExperienceDescriptionPoints findUniqueOrThrow
   */
  export type WorkExperienceDescriptionPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperienceDescriptionPoints to fetch.
     */
    where: WorkExperienceDescriptionPointsWhereUniqueInput
  }

  /**
   * WorkExperienceDescriptionPoints findFirst
   */
  export type WorkExperienceDescriptionPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperienceDescriptionPoints to fetch.
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperienceDescriptionPoints to fetch.
     */
    orderBy?: WorkExperienceDescriptionPointsOrderByWithRelationInput | WorkExperienceDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperienceDescriptionPoints.
     */
    cursor?: WorkExperienceDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperienceDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperienceDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperienceDescriptionPoints.
     */
    distinct?: WorkExperienceDescriptionPointsScalarFieldEnum | WorkExperienceDescriptionPointsScalarFieldEnum[]
  }

  /**
   * WorkExperienceDescriptionPoints findFirstOrThrow
   */
  export type WorkExperienceDescriptionPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperienceDescriptionPoints to fetch.
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperienceDescriptionPoints to fetch.
     */
    orderBy?: WorkExperienceDescriptionPointsOrderByWithRelationInput | WorkExperienceDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperienceDescriptionPoints.
     */
    cursor?: WorkExperienceDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperienceDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperienceDescriptionPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperienceDescriptionPoints.
     */
    distinct?: WorkExperienceDescriptionPointsScalarFieldEnum | WorkExperienceDescriptionPointsScalarFieldEnum[]
  }

  /**
   * WorkExperienceDescriptionPoints findMany
   */
  export type WorkExperienceDescriptionPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperienceDescriptionPoints to fetch.
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperienceDescriptionPoints to fetch.
     */
    orderBy?: WorkExperienceDescriptionPointsOrderByWithRelationInput | WorkExperienceDescriptionPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperienceDescriptionPoints.
     */
    cursor?: WorkExperienceDescriptionPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperienceDescriptionPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperienceDescriptionPoints.
     */
    skip?: number
    distinct?: WorkExperienceDescriptionPointsScalarFieldEnum | WorkExperienceDescriptionPointsScalarFieldEnum[]
  }

  /**
   * WorkExperienceDescriptionPoints create
   */
  export type WorkExperienceDescriptionPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperienceDescriptionPoints.
     */
    data: XOR<WorkExperienceDescriptionPointsCreateInput, WorkExperienceDescriptionPointsUncheckedCreateInput>
  }

  /**
   * WorkExperienceDescriptionPoints createMany
   */
  export type WorkExperienceDescriptionPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperienceDescriptionPoints.
     */
    data: WorkExperienceDescriptionPointsCreateManyInput | WorkExperienceDescriptionPointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperienceDescriptionPoints createManyAndReturn
   */
  export type WorkExperienceDescriptionPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * The data used to create many WorkExperienceDescriptionPoints.
     */
    data: WorkExperienceDescriptionPointsCreateManyInput | WorkExperienceDescriptionPointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperienceDescriptionPoints update
   */
  export type WorkExperienceDescriptionPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperienceDescriptionPoints.
     */
    data: XOR<WorkExperienceDescriptionPointsUpdateInput, WorkExperienceDescriptionPointsUncheckedUpdateInput>
    /**
     * Choose, which WorkExperienceDescriptionPoints to update.
     */
    where: WorkExperienceDescriptionPointsWhereUniqueInput
  }

  /**
   * WorkExperienceDescriptionPoints updateMany
   */
  export type WorkExperienceDescriptionPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperienceDescriptionPoints.
     */
    data: XOR<WorkExperienceDescriptionPointsUpdateManyMutationInput, WorkExperienceDescriptionPointsUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperienceDescriptionPoints to update
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * Limit how many WorkExperienceDescriptionPoints to update.
     */
    limit?: number
  }

  /**
   * WorkExperienceDescriptionPoints updateManyAndReturn
   */
  export type WorkExperienceDescriptionPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * The data used to update WorkExperienceDescriptionPoints.
     */
    data: XOR<WorkExperienceDescriptionPointsUpdateManyMutationInput, WorkExperienceDescriptionPointsUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperienceDescriptionPoints to update
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * Limit how many WorkExperienceDescriptionPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkExperienceDescriptionPoints upsert
   */
  export type WorkExperienceDescriptionPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperienceDescriptionPoints to update in case it exists.
     */
    where: WorkExperienceDescriptionPointsWhereUniqueInput
    /**
     * In case the WorkExperienceDescriptionPoints found by the `where` argument doesn't exist, create a new WorkExperienceDescriptionPoints with this data.
     */
    create: XOR<WorkExperienceDescriptionPointsCreateInput, WorkExperienceDescriptionPointsUncheckedCreateInput>
    /**
     * In case the WorkExperienceDescriptionPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceDescriptionPointsUpdateInput, WorkExperienceDescriptionPointsUncheckedUpdateInput>
  }

  /**
   * WorkExperienceDescriptionPoints delete
   */
  export type WorkExperienceDescriptionPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
    /**
     * Filter which WorkExperienceDescriptionPoints to delete.
     */
    where: WorkExperienceDescriptionPointsWhereUniqueInput
  }

  /**
   * WorkExperienceDescriptionPoints deleteMany
   */
  export type WorkExperienceDescriptionPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperienceDescriptionPoints to delete
     */
    where?: WorkExperienceDescriptionPointsWhereInput
    /**
     * Limit how many WorkExperienceDescriptionPoints to delete.
     */
    limit?: number
  }

  /**
   * WorkExperienceDescriptionPoints without action
   */
  export type WorkExperienceDescriptionPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperienceDescriptionPoints
     */
    select?: WorkExperienceDescriptionPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperienceDescriptionPoints
     */
    omit?: WorkExperienceDescriptionPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceDescriptionPointsInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    resume_id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: bigint | null
    resume_id: bigint | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    sub_title: string | null
    description: string | null
    media: string | null
    resume_id: bigint | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    sub_title: string | null
    description: string | null
    media: string | null
    resume_id: bigint | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    title: number
    sub_title: number
    description: number
    media: number
    resume_id: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    title?: true
    sub_title?: true
    description?: true
    media?: true
    resume_id?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    title?: true
    sub_title?: true
    description?: true
    media?: true
    resume_id?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    title?: true
    sub_title?: true
    description?: true
    media?: true
    resume_id?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: bigint
    title: string | null
    sub_title: string | null
    description: string | null
    media: string | null
    resume_id: bigint | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sub_title?: boolean
    description?: boolean
    media?: boolean
    resume_id?: boolean
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sub_title?: boolean
    description?: boolean
    media?: boolean
    resume_id?: boolean
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sub_title?: boolean
    description?: boolean
    media?: boolean
    resume_id?: boolean
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type projectsSelectScalar = {
    id?: boolean
    title?: boolean
    sub_title?: boolean
    description?: boolean
    media?: boolean
    resume_id?: boolean
  }

  export type projectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sub_title" | "description" | "media" | "resume_id", ExtArgs["result"]["projects"]>
  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }
  export type projectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }
  export type projectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | projects$resumeArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      resume: Prisma.$resumesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string | null
      sub_title: string | null
      description: string | null
      media: string | null
      resume_id: bigint | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectsCreateManyAndReturnArgs>(args?: SelectSubset<T, projectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {projectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
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
    updateManyAndReturn<T extends projectsUpdateManyAndReturnArgs>(args: SelectSubset<T, projectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends projects$resumeArgs<ExtArgs> = {}>(args?: Subset<T, projects$resumeArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the projects model
   */
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'BigInt'>
    readonly title: FieldRef<"projects", 'String'>
    readonly sub_title: FieldRef<"projects", 'String'>
    readonly description: FieldRef<"projects", 'String'>
    readonly media: FieldRef<"projects", 'String'>
    readonly resume_id: FieldRef<"projects", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data?: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects createManyAndReturn
   */
  export type projectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * projects updateManyAndReturn
   */
  export type projectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * projects.resume
   */
  export type projects$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    where?: resumesWhereInput
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projects
     */
    omit?: projectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model media_links
   */

  export type AggregateMedia_links = {
    _count: Media_linksCountAggregateOutputType | null
    _avg: Media_linksAvgAggregateOutputType | null
    _sum: Media_linksSumAggregateOutputType | null
    _min: Media_linksMinAggregateOutputType | null
    _max: Media_linksMaxAggregateOutputType | null
  }

  export type Media_linksAvgAggregateOutputType = {
    id: number | null
    resume_id: number | null
  }

  export type Media_linksSumAggregateOutputType = {
    id: bigint | null
    resume_id: bigint | null
  }

  export type Media_linksMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    link: string | null
    resume_id: bigint | null
  }

  export type Media_linksMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    link: string | null
    resume_id: bigint | null
  }

  export type Media_linksCountAggregateOutputType = {
    id: number
    name: number
    link: number
    resume_id: number
    _all: number
  }


  export type Media_linksAvgAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type Media_linksSumAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type Media_linksMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    resume_id?: true
  }

  export type Media_linksMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    resume_id?: true
  }

  export type Media_linksCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    resume_id?: true
    _all?: true
  }

  export type Media_linksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media_links to aggregate.
     */
    where?: media_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_links to fetch.
     */
    orderBy?: media_linksOrderByWithRelationInput | media_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: media_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned media_links
    **/
    _count?: true | Media_linksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Media_linksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Media_linksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Media_linksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Media_linksMaxAggregateInputType
  }

  export type GetMedia_linksAggregateType<T extends Media_linksAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia_links]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia_links[P]>
      : GetScalarType<T[P], AggregateMedia_links[P]>
  }




  export type media_linksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: media_linksWhereInput
    orderBy?: media_linksOrderByWithAggregationInput | media_linksOrderByWithAggregationInput[]
    by: Media_linksScalarFieldEnum[] | Media_linksScalarFieldEnum
    having?: media_linksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Media_linksCountAggregateInputType | true
    _avg?: Media_linksAvgAggregateInputType
    _sum?: Media_linksSumAggregateInputType
    _min?: Media_linksMinAggregateInputType
    _max?: Media_linksMaxAggregateInputType
  }

  export type Media_linksGroupByOutputType = {
    id: bigint
    name: string | null
    link: string | null
    resume_id: bigint | null
    _count: Media_linksCountAggregateOutputType | null
    _avg: Media_linksAvgAggregateOutputType | null
    _sum: Media_linksSumAggregateOutputType | null
    _min: Media_linksMinAggregateOutputType | null
    _max: Media_linksMaxAggregateOutputType | null
  }

  type GetMedia_linksGroupByPayload<T extends media_linksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Media_linksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Media_linksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Media_linksGroupByOutputType[P]>
            : GetScalarType<T[P], Media_linksGroupByOutputType[P]>
        }
      >
    >


  export type media_linksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    resume_id?: boolean
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["media_links"]>

  export type media_linksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    resume_id?: boolean
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["media_links"]>

  export type media_linksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    resume_id?: boolean
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["media_links"]>

  export type media_linksSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    resume_id?: boolean
  }

  export type media_linksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "resume_id", ExtArgs["result"]["media_links"]>
  export type media_linksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }
  export type media_linksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }
  export type media_linksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | media_links$resumeArgs<ExtArgs>
  }

  export type $media_linksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "media_links"
    objects: {
      resume: Prisma.$resumesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      link: string | null
      resume_id: bigint | null
    }, ExtArgs["result"]["media_links"]>
    composites: {}
  }

  type media_linksGetPayload<S extends boolean | null | undefined | media_linksDefaultArgs> = $Result.GetResult<Prisma.$media_linksPayload, S>

  type media_linksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<media_linksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Media_linksCountAggregateInputType | true
    }

  export interface media_linksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['media_links'], meta: { name: 'media_links' } }
    /**
     * Find zero or one Media_links that matches the filter.
     * @param {media_linksFindUniqueArgs} args - Arguments to find a Media_links
     * @example
     * // Get one Media_links
     * const media_links = await prisma.media_links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends media_linksFindUniqueArgs>(args: SelectSubset<T, media_linksFindUniqueArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media_links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {media_linksFindUniqueOrThrowArgs} args - Arguments to find a Media_links
     * @example
     * // Get one Media_links
     * const media_links = await prisma.media_links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends media_linksFindUniqueOrThrowArgs>(args: SelectSubset<T, media_linksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksFindFirstArgs} args - Arguments to find a Media_links
     * @example
     * // Get one Media_links
     * const media_links = await prisma.media_links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends media_linksFindFirstArgs>(args?: SelectSubset<T, media_linksFindFirstArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media_links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksFindFirstOrThrowArgs} args - Arguments to find a Media_links
     * @example
     * // Get one Media_links
     * const media_links = await prisma.media_links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends media_linksFindFirstOrThrowArgs>(args?: SelectSubset<T, media_linksFindFirstOrThrowArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media_links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media_links
     * const media_links = await prisma.media_links.findMany()
     * 
     * // Get first 10 Media_links
     * const media_links = await prisma.media_links.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const media_linksWithIdOnly = await prisma.media_links.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends media_linksFindManyArgs>(args?: SelectSubset<T, media_linksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media_links.
     * @param {media_linksCreateArgs} args - Arguments to create a Media_links.
     * @example
     * // Create one Media_links
     * const Media_links = await prisma.media_links.create({
     *   data: {
     *     // ... data to create a Media_links
     *   }
     * })
     * 
     */
    create<T extends media_linksCreateArgs>(args: SelectSubset<T, media_linksCreateArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media_links.
     * @param {media_linksCreateManyArgs} args - Arguments to create many Media_links.
     * @example
     * // Create many Media_links
     * const media_links = await prisma.media_links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends media_linksCreateManyArgs>(args?: SelectSubset<T, media_linksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media_links and returns the data saved in the database.
     * @param {media_linksCreateManyAndReturnArgs} args - Arguments to create many Media_links.
     * @example
     * // Create many Media_links
     * const media_links = await prisma.media_links.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media_links and only return the `id`
     * const media_linksWithIdOnly = await prisma.media_links.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends media_linksCreateManyAndReturnArgs>(args?: SelectSubset<T, media_linksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media_links.
     * @param {media_linksDeleteArgs} args - Arguments to delete one Media_links.
     * @example
     * // Delete one Media_links
     * const Media_links = await prisma.media_links.delete({
     *   where: {
     *     // ... filter to delete one Media_links
     *   }
     * })
     * 
     */
    delete<T extends media_linksDeleteArgs>(args: SelectSubset<T, media_linksDeleteArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media_links.
     * @param {media_linksUpdateArgs} args - Arguments to update one Media_links.
     * @example
     * // Update one Media_links
     * const media_links = await prisma.media_links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends media_linksUpdateArgs>(args: SelectSubset<T, media_linksUpdateArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media_links.
     * @param {media_linksDeleteManyArgs} args - Arguments to filter Media_links to delete.
     * @example
     * // Delete a few Media_links
     * const { count } = await prisma.media_links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends media_linksDeleteManyArgs>(args?: SelectSubset<T, media_linksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media_links
     * const media_links = await prisma.media_links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends media_linksUpdateManyArgs>(args: SelectSubset<T, media_linksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media_links and returns the data updated in the database.
     * @param {media_linksUpdateManyAndReturnArgs} args - Arguments to update many Media_links.
     * @example
     * // Update many Media_links
     * const media_links = await prisma.media_links.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media_links and only return the `id`
     * const media_linksWithIdOnly = await prisma.media_links.updateManyAndReturn({
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
    updateManyAndReturn<T extends media_linksUpdateManyAndReturnArgs>(args: SelectSubset<T, media_linksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media_links.
     * @param {media_linksUpsertArgs} args - Arguments to update or create a Media_links.
     * @example
     * // Update or create a Media_links
     * const media_links = await prisma.media_links.upsert({
     *   create: {
     *     // ... data to create a Media_links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media_links we want to update
     *   }
     * })
     */
    upsert<T extends media_linksUpsertArgs>(args: SelectSubset<T, media_linksUpsertArgs<ExtArgs>>): Prisma__media_linksClient<$Result.GetResult<Prisma.$media_linksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksCountArgs} args - Arguments to filter Media_links to count.
     * @example
     * // Count the number of Media_links
     * const count = await prisma.media_links.count({
     *   where: {
     *     // ... the filter for the Media_links we want to count
     *   }
     * })
    **/
    count<T extends media_linksCountArgs>(
      args?: Subset<T, media_linksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Media_linksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Media_linksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Media_linksAggregateArgs>(args: Subset<T, Media_linksAggregateArgs>): Prisma.PrismaPromise<GetMedia_linksAggregateType<T>>

    /**
     * Group by Media_links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {media_linksGroupByArgs} args - Group by arguments.
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
      T extends media_linksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: media_linksGroupByArgs['orderBy'] }
        : { orderBy?: media_linksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, media_linksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedia_linksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the media_links model
   */
  readonly fields: media_linksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for media_links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__media_linksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends media_links$resumeArgs<ExtArgs> = {}>(args?: Subset<T, media_links$resumeArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the media_links model
   */
  interface media_linksFieldRefs {
    readonly id: FieldRef<"media_links", 'BigInt'>
    readonly name: FieldRef<"media_links", 'String'>
    readonly link: FieldRef<"media_links", 'String'>
    readonly resume_id: FieldRef<"media_links", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * media_links findUnique
   */
  export type media_linksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter, which media_links to fetch.
     */
    where: media_linksWhereUniqueInput
  }

  /**
   * media_links findUniqueOrThrow
   */
  export type media_linksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter, which media_links to fetch.
     */
    where: media_linksWhereUniqueInput
  }

  /**
   * media_links findFirst
   */
  export type media_linksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter, which media_links to fetch.
     */
    where?: media_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_links to fetch.
     */
    orderBy?: media_linksOrderByWithRelationInput | media_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media_links.
     */
    cursor?: media_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media_links.
     */
    distinct?: Media_linksScalarFieldEnum | Media_linksScalarFieldEnum[]
  }

  /**
   * media_links findFirstOrThrow
   */
  export type media_linksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter, which media_links to fetch.
     */
    where?: media_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_links to fetch.
     */
    orderBy?: media_linksOrderByWithRelationInput | media_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for media_links.
     */
    cursor?: media_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of media_links.
     */
    distinct?: Media_linksScalarFieldEnum | Media_linksScalarFieldEnum[]
  }

  /**
   * media_links findMany
   */
  export type media_linksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter, which media_links to fetch.
     */
    where?: media_linksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of media_links to fetch.
     */
    orderBy?: media_linksOrderByWithRelationInput | media_linksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing media_links.
     */
    cursor?: media_linksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` media_links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` media_links.
     */
    skip?: number
    distinct?: Media_linksScalarFieldEnum | Media_linksScalarFieldEnum[]
  }

  /**
   * media_links create
   */
  export type media_linksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * The data needed to create a media_links.
     */
    data?: XOR<media_linksCreateInput, media_linksUncheckedCreateInput>
  }

  /**
   * media_links createMany
   */
  export type media_linksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many media_links.
     */
    data: media_linksCreateManyInput | media_linksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * media_links createManyAndReturn
   */
  export type media_linksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * The data used to create many media_links.
     */
    data: media_linksCreateManyInput | media_linksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * media_links update
   */
  export type media_linksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * The data needed to update a media_links.
     */
    data: XOR<media_linksUpdateInput, media_linksUncheckedUpdateInput>
    /**
     * Choose, which media_links to update.
     */
    where: media_linksWhereUniqueInput
  }

  /**
   * media_links updateMany
   */
  export type media_linksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update media_links.
     */
    data: XOR<media_linksUpdateManyMutationInput, media_linksUncheckedUpdateManyInput>
    /**
     * Filter which media_links to update
     */
    where?: media_linksWhereInput
    /**
     * Limit how many media_links to update.
     */
    limit?: number
  }

  /**
   * media_links updateManyAndReturn
   */
  export type media_linksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * The data used to update media_links.
     */
    data: XOR<media_linksUpdateManyMutationInput, media_linksUncheckedUpdateManyInput>
    /**
     * Filter which media_links to update
     */
    where?: media_linksWhereInput
    /**
     * Limit how many media_links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * media_links upsert
   */
  export type media_linksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * The filter to search for the media_links to update in case it exists.
     */
    where: media_linksWhereUniqueInput
    /**
     * In case the media_links found by the `where` argument doesn't exist, create a new media_links with this data.
     */
    create: XOR<media_linksCreateInput, media_linksUncheckedCreateInput>
    /**
     * In case the media_links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<media_linksUpdateInput, media_linksUncheckedUpdateInput>
  }

  /**
   * media_links delete
   */
  export type media_linksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
    /**
     * Filter which media_links to delete.
     */
    where: media_linksWhereUniqueInput
  }

  /**
   * media_links deleteMany
   */
  export type media_linksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which media_links to delete
     */
    where?: media_linksWhereInput
    /**
     * Limit how many media_links to delete.
     */
    limit?: number
  }

  /**
   * media_links.resume
   */
  export type media_links$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    where?: resumesWhereInput
  }

  /**
   * media_links without action
   */
  export type media_linksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the media_links
     */
    select?: media_linksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the media_links
     */
    omit?: media_linksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: media_linksInclude<ExtArgs> | null
  }


  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
    resume_id: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: bigint | null
    resume_id: bigint | null
  }

  export type SkillsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    skill_group: string | null
    resume_id: bigint | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    skill_group: string | null
    resume_id: bigint | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    name: number
    skill_group: number
    resume_id: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
    resume_id?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    name?: true
    skill_group?: true
    resume_id?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    name?: true
    skill_group?: true
    resume_id?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    name?: true
    skill_group?: true
    resume_id?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithAggregationInput | skillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: bigint
    name: string | null
    skill_group: string | null
    resume_id: bigint | null
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill_group?: boolean
    resume_id?: boolean
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill_group?: boolean
    resume_id?: boolean
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    skill_group?: boolean
    resume_id?: boolean
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectScalar = {
    id?: boolean
    name?: boolean
    skill_group?: boolean
    resume_id?: boolean
  }

  export type skillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "skill_group" | "resume_id", ExtArgs["result"]["skills"]>
  export type skillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }
  export type skillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }
  export type skillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | skills$resumeArgs<ExtArgs>
  }

  export type $skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skills"
    objects: {
      resume: Prisma.$resumesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      skill_group: string | null
      resume_id: bigint | null
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }

  type skillsGetPayload<S extends boolean | null | undefined | skillsDefaultArgs> = $Result.GetResult<Prisma.$skillsPayload, S>

  type skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skills'], meta: { name: 'skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {skillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillsFindUniqueArgs>(args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs>(args: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillsFindFirstArgs>(args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs>(args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillsFindManyArgs>(args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skills.
     * @param {skillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
     */
    create<T extends skillsCreateArgs>(args: SelectSubset<T, skillsCreateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillsCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillsCreateManyArgs>(args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillsCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skills = await prisma.skills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillsCreateManyAndReturnArgs>(args?: SelectSubset<T, skillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skills.
     * @param {skillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
     */
    delete<T extends skillsDeleteArgs>(args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skills.
     * @param {skillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillsUpdateArgs>(args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillsDeleteManyArgs>(args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillsUpdateManyArgs>(args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillsUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillsWithIdOnly = await prisma.skills.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillsUpdateManyAndReturnArgs>(args: SelectSubset<T, skillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skills.
     * @param {skillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
     */
    upsert<T extends skillsUpsertArgs>(args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillsCountArgs>(
      args?: Subset<T, skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsGroupByArgs} args - Group by arguments.
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
      T extends skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs['orderBy'] }
        : { orderBy?: skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skills model
   */
  readonly fields: skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends skills$resumeArgs<ExtArgs> = {}>(args?: Subset<T, skills$resumeArgs<ExtArgs>>): Prisma__resumesClient<$Result.GetResult<Prisma.$resumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the skills model
   */
  interface skillsFieldRefs {
    readonly id: FieldRef<"skills", 'BigInt'>
    readonly name: FieldRef<"skills", 'String'>
    readonly skill_group: FieldRef<"skills", 'String'>
    readonly resume_id: FieldRef<"skills", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills create
   */
  export type skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to create a skills.
     */
    data?: XOR<skillsCreateInput, skillsUncheckedCreateInput>
  }

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skills createManyAndReturn
   */
  export type skillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills update
   */
  export type skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skills updateManyAndReturn
   */
  export type skillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
  }

  /**
   * skills delete
   */
  export type skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skills.resume
   */
  export type skills$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resumes
     */
    select?: resumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resumes
     */
    omit?: resumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resumesInclude<ExtArgs> | null
    where?: resumesWhereInput
  }

  /**
   * skills without action
   */
  export type skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skills
     */
    omit?: skillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillsInclude<ExtArgs> | null
  }


  /**
   * Model job_applications
   */

  export type AggregateJob_applications = {
    _count: Job_applicationsCountAggregateOutputType | null
    _avg: Job_applicationsAvgAggregateOutputType | null
    _sum: Job_applicationsSumAggregateOutputType | null
    _min: Job_applicationsMinAggregateOutputType | null
    _max: Job_applicationsMaxAggregateOutputType | null
  }

  export type Job_applicationsAvgAggregateOutputType = {
    id: number | null
    description: number | null
    notes: number | null
  }

  export type Job_applicationsSumAggregateOutputType = {
    id: bigint | null
    description: number | null
    notes: number | null
  }

  export type Job_applicationsMinAggregateOutputType = {
    id: bigint | null
    link: string | null
    contact: string | null
    status: string | null
    company: string | null
    role: string | null
    schedule: string | null
    description: number | null
    notes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_applicationsMaxAggregateOutputType = {
    id: bigint | null
    link: string | null
    contact: string | null
    status: string | null
    company: string | null
    role: string | null
    schedule: string | null
    description: number | null
    notes: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Job_applicationsCountAggregateOutputType = {
    id: number
    link: number
    contact: number
    status: number
    company: number
    role: number
    schedule: number
    description: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Job_applicationsAvgAggregateInputType = {
    id?: true
    description?: true
    notes?: true
  }

  export type Job_applicationsSumAggregateInputType = {
    id?: true
    description?: true
    notes?: true
  }

  export type Job_applicationsMinAggregateInputType = {
    id?: true
    link?: true
    contact?: true
    status?: true
    company?: true
    role?: true
    schedule?: true
    description?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Job_applicationsMaxAggregateInputType = {
    id?: true
    link?: true
    contact?: true
    status?: true
    company?: true
    role?: true
    schedule?: true
    description?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type Job_applicationsCountAggregateInputType = {
    id?: true
    link?: true
    contact?: true
    status?: true
    company?: true
    role?: true
    schedule?: true
    description?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Job_applicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to aggregate.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned job_applications
    **/
    _count?: true | Job_applicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_applicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_applicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_applicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_applicationsMaxAggregateInputType
  }

  export type GetJob_applicationsAggregateType<T extends Job_applicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_applications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_applications[P]>
      : GetScalarType<T[P], AggregateJob_applications[P]>
  }




  export type job_applicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_applicationsWhereInput
    orderBy?: job_applicationsOrderByWithAggregationInput | job_applicationsOrderByWithAggregationInput[]
    by: Job_applicationsScalarFieldEnum[] | Job_applicationsScalarFieldEnum
    having?: job_applicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_applicationsCountAggregateInputType | true
    _avg?: Job_applicationsAvgAggregateInputType
    _sum?: Job_applicationsSumAggregateInputType
    _min?: Job_applicationsMinAggregateInputType
    _max?: Job_applicationsMaxAggregateInputType
  }

  export type Job_applicationsGroupByOutputType = {
    id: bigint
    link: string | null
    contact: string | null
    status: string | null
    company: string | null
    role: string | null
    schedule: string | null
    description: number | null
    notes: number | null
    created_at: Date
    updated_at: Date | null
    _count: Job_applicationsCountAggregateOutputType | null
    _avg: Job_applicationsAvgAggregateOutputType | null
    _sum: Job_applicationsSumAggregateOutputType | null
    _min: Job_applicationsMinAggregateOutputType | null
    _max: Job_applicationsMaxAggregateOutputType | null
  }

  type GetJob_applicationsGroupByPayload<T extends job_applicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_applicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_applicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_applicationsGroupByOutputType[P]>
            : GetScalarType<T[P], Job_applicationsGroupByOutputType[P]>
        }
      >
    >


  export type job_applicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    contact?: boolean
    status?: boolean
    company?: boolean
    role?: boolean
    schedule?: boolean
    description?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    contact?: boolean
    status?: boolean
    company?: boolean
    role?: boolean
    schedule?: boolean
    description?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    contact?: boolean
    status?: boolean
    company?: boolean
    role?: boolean
    schedule?: boolean
    description?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["job_applications"]>

  export type job_applicationsSelectScalar = {
    id?: boolean
    link?: boolean
    contact?: boolean
    status?: boolean
    company?: boolean
    role?: boolean
    schedule?: boolean
    description?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type job_applicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "contact" | "status" | "company" | "role" | "schedule" | "description" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["job_applications"]>

  export type $job_applicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "job_applications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      link: string | null
      contact: string | null
      status: string | null
      company: string | null
      role: string | null
      schedule: string | null
      description: number | null
      notes: number | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["job_applications"]>
    composites: {}
  }

  type job_applicationsGetPayload<S extends boolean | null | undefined | job_applicationsDefaultArgs> = $Result.GetResult<Prisma.$job_applicationsPayload, S>

  type job_applicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<job_applicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_applicationsCountAggregateInputType | true
    }

  export interface job_applicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_applications'], meta: { name: 'job_applications' } }
    /**
     * Find zero or one Job_applications that matches the filter.
     * @param {job_applicationsFindUniqueArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends job_applicationsFindUniqueArgs>(args: SelectSubset<T, job_applicationsFindUniqueArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {job_applicationsFindUniqueOrThrowArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends job_applicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, job_applicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindFirstArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends job_applicationsFindFirstArgs>(args?: SelectSubset<T, job_applicationsFindFirstArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindFirstOrThrowArgs} args - Arguments to find a Job_applications
     * @example
     * // Get one Job_applications
     * const job_applications = await prisma.job_applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends job_applicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, job_applicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_applications
     * const job_applications = await prisma.job_applications.findMany()
     * 
     * // Get first 10 Job_applications
     * const job_applications = await prisma.job_applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends job_applicationsFindManyArgs>(args?: SelectSubset<T, job_applicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_applications.
     * @param {job_applicationsCreateArgs} args - Arguments to create a Job_applications.
     * @example
     * // Create one Job_applications
     * const Job_applications = await prisma.job_applications.create({
     *   data: {
     *     // ... data to create a Job_applications
     *   }
     * })
     * 
     */
    create<T extends job_applicationsCreateArgs>(args: SelectSubset<T, job_applicationsCreateArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_applications.
     * @param {job_applicationsCreateManyArgs} args - Arguments to create many Job_applications.
     * @example
     * // Create many Job_applications
     * const job_applications = await prisma.job_applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends job_applicationsCreateManyArgs>(args?: SelectSubset<T, job_applicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Job_applications and returns the data saved in the database.
     * @param {job_applicationsCreateManyAndReturnArgs} args - Arguments to create many Job_applications.
     * @example
     * // Create many Job_applications
     * const job_applications = await prisma.job_applications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Job_applications and only return the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends job_applicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, job_applicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job_applications.
     * @param {job_applicationsDeleteArgs} args - Arguments to delete one Job_applications.
     * @example
     * // Delete one Job_applications
     * const Job_applications = await prisma.job_applications.delete({
     *   where: {
     *     // ... filter to delete one Job_applications
     *   }
     * })
     * 
     */
    delete<T extends job_applicationsDeleteArgs>(args: SelectSubset<T, job_applicationsDeleteArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_applications.
     * @param {job_applicationsUpdateArgs} args - Arguments to update one Job_applications.
     * @example
     * // Update one Job_applications
     * const job_applications = await prisma.job_applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends job_applicationsUpdateArgs>(args: SelectSubset<T, job_applicationsUpdateArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_applications.
     * @param {job_applicationsDeleteManyArgs} args - Arguments to filter Job_applications to delete.
     * @example
     * // Delete a few Job_applications
     * const { count } = await prisma.job_applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends job_applicationsDeleteManyArgs>(args?: SelectSubset<T, job_applicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_applications
     * const job_applications = await prisma.job_applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends job_applicationsUpdateManyArgs>(args: SelectSubset<T, job_applicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_applications and returns the data updated in the database.
     * @param {job_applicationsUpdateManyAndReturnArgs} args - Arguments to update many Job_applications.
     * @example
     * // Update many Job_applications
     * const job_applications = await prisma.job_applications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Job_applications and only return the `id`
     * const job_applicationsWithIdOnly = await prisma.job_applications.updateManyAndReturn({
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
    updateManyAndReturn<T extends job_applicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, job_applicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job_applications.
     * @param {job_applicationsUpsertArgs} args - Arguments to update or create a Job_applications.
     * @example
     * // Update or create a Job_applications
     * const job_applications = await prisma.job_applications.upsert({
     *   create: {
     *     // ... data to create a Job_applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_applications we want to update
     *   }
     * })
     */
    upsert<T extends job_applicationsUpsertArgs>(args: SelectSubset<T, job_applicationsUpsertArgs<ExtArgs>>): Prisma__job_applicationsClient<$Result.GetResult<Prisma.$job_applicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsCountArgs} args - Arguments to filter Job_applications to count.
     * @example
     * // Count the number of Job_applications
     * const count = await prisma.job_applications.count({
     *   where: {
     *     // ... the filter for the Job_applications we want to count
     *   }
     * })
    **/
    count<T extends job_applicationsCountArgs>(
      args?: Subset<T, job_applicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_applicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_applicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_applicationsAggregateArgs>(args: Subset<T, Job_applicationsAggregateArgs>): Prisma.PrismaPromise<GetJob_applicationsAggregateType<T>>

    /**
     * Group by Job_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_applicationsGroupByArgs} args - Group by arguments.
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
      T extends job_applicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_applicationsGroupByArgs['orderBy'] }
        : { orderBy?: job_applicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, job_applicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_applicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the job_applications model
   */
  readonly fields: job_applicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_applicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the job_applications model
   */
  interface job_applicationsFieldRefs {
    readonly id: FieldRef<"job_applications", 'BigInt'>
    readonly link: FieldRef<"job_applications", 'String'>
    readonly contact: FieldRef<"job_applications", 'String'>
    readonly status: FieldRef<"job_applications", 'String'>
    readonly company: FieldRef<"job_applications", 'String'>
    readonly role: FieldRef<"job_applications", 'String'>
    readonly schedule: FieldRef<"job_applications", 'String'>
    readonly description: FieldRef<"job_applications", 'Int'>
    readonly notes: FieldRef<"job_applications", 'Int'>
    readonly created_at: FieldRef<"job_applications", 'DateTime'>
    readonly updated_at: FieldRef<"job_applications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * job_applications findUnique
   */
  export type job_applicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications findUniqueOrThrow
   */
  export type job_applicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications findFirst
   */
  export type job_applicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications findFirstOrThrow
   */
  export type job_applicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of job_applications.
     */
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications findMany
   */
  export type job_applicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter, which job_applications to fetch.
     */
    where?: job_applicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of job_applications to fetch.
     */
    orderBy?: job_applicationsOrderByWithRelationInput | job_applicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing job_applications.
     */
    cursor?: job_applicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` job_applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` job_applications.
     */
    skip?: number
    distinct?: Job_applicationsScalarFieldEnum | Job_applicationsScalarFieldEnum[]
  }

  /**
   * job_applications create
   */
  export type job_applicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data needed to create a job_applications.
     */
    data?: XOR<job_applicationsCreateInput, job_applicationsUncheckedCreateInput>
  }

  /**
   * job_applications createMany
   */
  export type job_applicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationsCreateManyInput | job_applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_applications createManyAndReturn
   */
  export type job_applicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data used to create many job_applications.
     */
    data: job_applicationsCreateManyInput | job_applicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * job_applications update
   */
  export type job_applicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data needed to update a job_applications.
     */
    data: XOR<job_applicationsUpdateInput, job_applicationsUncheckedUpdateInput>
    /**
     * Choose, which job_applications to update.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications updateMany
   */
  export type job_applicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationsUpdateManyMutationInput, job_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to update.
     */
    limit?: number
  }

  /**
   * job_applications updateManyAndReturn
   */
  export type job_applicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The data used to update job_applications.
     */
    data: XOR<job_applicationsUpdateManyMutationInput, job_applicationsUncheckedUpdateManyInput>
    /**
     * Filter which job_applications to update
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to update.
     */
    limit?: number
  }

  /**
   * job_applications upsert
   */
  export type job_applicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * The filter to search for the job_applications to update in case it exists.
     */
    where: job_applicationsWhereUniqueInput
    /**
     * In case the job_applications found by the `where` argument doesn't exist, create a new job_applications with this data.
     */
    create: XOR<job_applicationsCreateInput, job_applicationsUncheckedCreateInput>
    /**
     * In case the job_applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_applicationsUpdateInput, job_applicationsUncheckedUpdateInput>
  }

  /**
   * job_applications delete
   */
  export type job_applicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
    /**
     * Filter which job_applications to delete.
     */
    where: job_applicationsWhereUniqueInput
  }

  /**
   * job_applications deleteMany
   */
  export type job_applicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_applications to delete
     */
    where?: job_applicationsWhereInput
    /**
     * Limit how many job_applications to delete.
     */
    limit?: number
  }

  /**
   * job_applications without action
   */
  export type job_applicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_applications
     */
    select?: job_applicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the job_applications
     */
    omit?: job_applicationsOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    email: 'email',
    password: 'password',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ResumesScalarFieldEnum: {
    id: 'id',
    resume_name: 'resume_name',
    is_active: 'is_active',
    full_name: 'full_name',
    email: 'email',
    phone: 'phone',
    picture: 'picture',
    summary: 'summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResumesScalarFieldEnum = (typeof ResumesScalarFieldEnum)[keyof typeof ResumesScalarFieldEnum]


  export const EducationsScalarFieldEnum: {
    id: 'id',
    school: 'school',
    education_name: 'education_name',
    start_date: 'start_date',
    end_date: 'end_date',
    resume_id: 'resume_id'
  };

  export type EducationsScalarFieldEnum = (typeof EducationsScalarFieldEnum)[keyof typeof EducationsScalarFieldEnum]


  export const EducationDescriptionPointsScalarFieldEnum: {
    id: 'id',
    education_entity_id: 'education_entity_id',
    description_point: 'description_point'
  };

  export type EducationDescriptionPointsScalarFieldEnum = (typeof EducationDescriptionPointsScalarFieldEnum)[keyof typeof EducationDescriptionPointsScalarFieldEnum]


  export const Work_experiencesScalarFieldEnum: {
    id: 'id',
    company: 'company',
    position: 'position',
    start_date: 'start_date',
    end_date: 'end_date',
    resume_id: 'resume_id'
  };

  export type Work_experiencesScalarFieldEnum = (typeof Work_experiencesScalarFieldEnum)[keyof typeof Work_experiencesScalarFieldEnum]


  export const WorkExperienceDescriptionPointsScalarFieldEnum: {
    id: 'id',
    work_experience_entity_id: 'work_experience_entity_id',
    description_point: 'description_point'
  };

  export type WorkExperienceDescriptionPointsScalarFieldEnum = (typeof WorkExperienceDescriptionPointsScalarFieldEnum)[keyof typeof WorkExperienceDescriptionPointsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sub_title: 'sub_title',
    description: 'description',
    media: 'media',
    resume_id: 'resume_id'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const Media_linksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    resume_id: 'resume_id'
  };

  export type Media_linksScalarFieldEnum = (typeof Media_linksScalarFieldEnum)[keyof typeof Media_linksScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    skill_group: 'skill_group',
    resume_id: 'resume_id'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const Job_applicationsScalarFieldEnum: {
    id: 'id',
    link: 'link',
    contact: 'contact',
    status: 'status',
    company: 'company',
    role: 'role',
    schedule: 'schedule',
    description: 'description',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Job_applicationsScalarFieldEnum = (typeof Job_applicationsScalarFieldEnum)[keyof typeof Job_applicationsScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    user_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_name?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    is_active?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "user_name" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    user_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_active?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type resumesWhereInput = {
    AND?: resumesWhereInput | resumesWhereInput[]
    OR?: resumesWhereInput[]
    NOT?: resumesWhereInput | resumesWhereInput[]
    id?: BigIntFilter<"resumes"> | bigint | number
    resume_name?: StringNullableFilter<"resumes"> | string | null
    is_active?: BoolNullableFilter<"resumes"> | boolean | null
    full_name?: StringNullableFilter<"resumes"> | string | null
    email?: StringNullableFilter<"resumes"> | string | null
    phone?: StringNullableFilter<"resumes"> | string | null
    picture?: StringNullableFilter<"resumes"> | string | null
    summary?: StringNullableFilter<"resumes"> | string | null
    created_at?: DateTimeFilter<"resumes"> | Date | string
    updated_at?: DateTimeNullableFilter<"resumes"> | Date | string | null
    educations?: EducationsListRelationFilter
    media_links?: Media_linksListRelationFilter
    projects?: ProjectsListRelationFilter
    skills?: SkillsListRelationFilter
    work_experiences?: Work_experiencesListRelationFilter
  }

  export type resumesOrderByWithRelationInput = {
    id?: SortOrder
    resume_name?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    educations?: educationsOrderByRelationAggregateInput
    media_links?: media_linksOrderByRelationAggregateInput
    projects?: projectsOrderByRelationAggregateInput
    skills?: skillsOrderByRelationAggregateInput
    work_experiences?: work_experiencesOrderByRelationAggregateInput
  }

  export type resumesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: resumesWhereInput | resumesWhereInput[]
    OR?: resumesWhereInput[]
    NOT?: resumesWhereInput | resumesWhereInput[]
    resume_name?: StringNullableFilter<"resumes"> | string | null
    is_active?: BoolNullableFilter<"resumes"> | boolean | null
    full_name?: StringNullableFilter<"resumes"> | string | null
    email?: StringNullableFilter<"resumes"> | string | null
    phone?: StringNullableFilter<"resumes"> | string | null
    picture?: StringNullableFilter<"resumes"> | string | null
    summary?: StringNullableFilter<"resumes"> | string | null
    created_at?: DateTimeFilter<"resumes"> | Date | string
    updated_at?: DateTimeNullableFilter<"resumes"> | Date | string | null
    educations?: EducationsListRelationFilter
    media_links?: Media_linksListRelationFilter
    projects?: ProjectsListRelationFilter
    skills?: SkillsListRelationFilter
    work_experiences?: Work_experiencesListRelationFilter
  }, "id">

  export type resumesOrderByWithAggregationInput = {
    id?: SortOrder
    resume_name?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: resumesCountOrderByAggregateInput
    _avg?: resumesAvgOrderByAggregateInput
    _max?: resumesMaxOrderByAggregateInput
    _min?: resumesMinOrderByAggregateInput
    _sum?: resumesSumOrderByAggregateInput
  }

  export type resumesScalarWhereWithAggregatesInput = {
    AND?: resumesScalarWhereWithAggregatesInput | resumesScalarWhereWithAggregatesInput[]
    OR?: resumesScalarWhereWithAggregatesInput[]
    NOT?: resumesScalarWhereWithAggregatesInput | resumesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"resumes"> | bigint | number
    resume_name?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    is_active?: BoolNullableWithAggregatesFilter<"resumes"> | boolean | null
    full_name?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    email?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    phone?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    picture?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    summary?: StringNullableWithAggregatesFilter<"resumes"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"resumes"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"resumes"> | Date | string | null
  }

  export type educationsWhereInput = {
    AND?: educationsWhereInput | educationsWhereInput[]
    OR?: educationsWhereInput[]
    NOT?: educationsWhereInput | educationsWhereInput[]
    id?: BigIntFilter<"educations"> | bigint | number
    school?: StringNullableFilter<"educations"> | string | null
    education_name?: StringNullableFilter<"educations"> | string | null
    start_date?: StringNullableFilter<"educations"> | string | null
    end_date?: StringNullableFilter<"educations"> | string | null
    resume_id?: BigIntNullableFilter<"educations"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
    description_points?: EducationDescriptionPointsListRelationFilter
  }

  export type educationsOrderByWithRelationInput = {
    id?: SortOrder
    school?: SortOrderInput | SortOrder
    education_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume?: resumesOrderByWithRelationInput
    description_points?: EducationDescriptionPointsOrderByRelationAggregateInput
  }

  export type educationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: educationsWhereInput | educationsWhereInput[]
    OR?: educationsWhereInput[]
    NOT?: educationsWhereInput | educationsWhereInput[]
    school?: StringNullableFilter<"educations"> | string | null
    education_name?: StringNullableFilter<"educations"> | string | null
    start_date?: StringNullableFilter<"educations"> | string | null
    end_date?: StringNullableFilter<"educations"> | string | null
    resume_id?: BigIntNullableFilter<"educations"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
    description_points?: EducationDescriptionPointsListRelationFilter
  }, "id">

  export type educationsOrderByWithAggregationInput = {
    id?: SortOrder
    school?: SortOrderInput | SortOrder
    education_name?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    _count?: educationsCountOrderByAggregateInput
    _avg?: educationsAvgOrderByAggregateInput
    _max?: educationsMaxOrderByAggregateInput
    _min?: educationsMinOrderByAggregateInput
    _sum?: educationsSumOrderByAggregateInput
  }

  export type educationsScalarWhereWithAggregatesInput = {
    AND?: educationsScalarWhereWithAggregatesInput | educationsScalarWhereWithAggregatesInput[]
    OR?: educationsScalarWhereWithAggregatesInput[]
    NOT?: educationsScalarWhereWithAggregatesInput | educationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"educations"> | bigint | number
    school?: StringNullableWithAggregatesFilter<"educations"> | string | null
    education_name?: StringNullableWithAggregatesFilter<"educations"> | string | null
    start_date?: StringNullableWithAggregatesFilter<"educations"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"educations"> | string | null
    resume_id?: BigIntNullableWithAggregatesFilter<"educations"> | bigint | number | null
  }

  export type EducationDescriptionPointsWhereInput = {
    AND?: EducationDescriptionPointsWhereInput | EducationDescriptionPointsWhereInput[]
    OR?: EducationDescriptionPointsWhereInput[]
    NOT?: EducationDescriptionPointsWhereInput | EducationDescriptionPointsWhereInput[]
    id?: BigIntFilter<"EducationDescriptionPoints"> | bigint | number
    education_entity_id?: BigIntFilter<"EducationDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"EducationDescriptionPoints"> | string | null
    education?: XOR<EducationsScalarRelationFilter, educationsWhereInput>
  }

  export type EducationDescriptionPointsOrderByWithRelationInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
    description_point?: SortOrderInput | SortOrder
    education?: educationsOrderByWithRelationInput
  }

  export type EducationDescriptionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EducationDescriptionPointsWhereInput | EducationDescriptionPointsWhereInput[]
    OR?: EducationDescriptionPointsWhereInput[]
    NOT?: EducationDescriptionPointsWhereInput | EducationDescriptionPointsWhereInput[]
    education_entity_id?: BigIntFilter<"EducationDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"EducationDescriptionPoints"> | string | null
    education?: XOR<EducationsScalarRelationFilter, educationsWhereInput>
  }, "id">

  export type EducationDescriptionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
    description_point?: SortOrderInput | SortOrder
    _count?: EducationDescriptionPointsCountOrderByAggregateInput
    _avg?: EducationDescriptionPointsAvgOrderByAggregateInput
    _max?: EducationDescriptionPointsMaxOrderByAggregateInput
    _min?: EducationDescriptionPointsMinOrderByAggregateInput
    _sum?: EducationDescriptionPointsSumOrderByAggregateInput
  }

  export type EducationDescriptionPointsScalarWhereWithAggregatesInput = {
    AND?: EducationDescriptionPointsScalarWhereWithAggregatesInput | EducationDescriptionPointsScalarWhereWithAggregatesInput[]
    OR?: EducationDescriptionPointsScalarWhereWithAggregatesInput[]
    NOT?: EducationDescriptionPointsScalarWhereWithAggregatesInput | EducationDescriptionPointsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"EducationDescriptionPoints"> | bigint | number
    education_entity_id?: BigIntWithAggregatesFilter<"EducationDescriptionPoints"> | bigint | number
    description_point?: StringNullableWithAggregatesFilter<"EducationDescriptionPoints"> | string | null
  }

  export type work_experiencesWhereInput = {
    AND?: work_experiencesWhereInput | work_experiencesWhereInput[]
    OR?: work_experiencesWhereInput[]
    NOT?: work_experiencesWhereInput | work_experiencesWhereInput[]
    id?: BigIntFilter<"work_experiences"> | bigint | number
    company?: StringNullableFilter<"work_experiences"> | string | null
    position?: StringNullableFilter<"work_experiences"> | string | null
    start_date?: StringNullableFilter<"work_experiences"> | string | null
    end_date?: StringNullableFilter<"work_experiences"> | string | null
    resume_id?: BigIntNullableFilter<"work_experiences"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
    description_points?: WorkExperienceDescriptionPointsListRelationFilter
  }

  export type work_experiencesOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume?: resumesOrderByWithRelationInput
    description_points?: WorkExperienceDescriptionPointsOrderByRelationAggregateInput
  }

  export type work_experiencesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: work_experiencesWhereInput | work_experiencesWhereInput[]
    OR?: work_experiencesWhereInput[]
    NOT?: work_experiencesWhereInput | work_experiencesWhereInput[]
    company?: StringNullableFilter<"work_experiences"> | string | null
    position?: StringNullableFilter<"work_experiences"> | string | null
    start_date?: StringNullableFilter<"work_experiences"> | string | null
    end_date?: StringNullableFilter<"work_experiences"> | string | null
    resume_id?: BigIntNullableFilter<"work_experiences"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
    description_points?: WorkExperienceDescriptionPointsListRelationFilter
  }, "id">

  export type work_experiencesOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    _count?: work_experiencesCountOrderByAggregateInput
    _avg?: work_experiencesAvgOrderByAggregateInput
    _max?: work_experiencesMaxOrderByAggregateInput
    _min?: work_experiencesMinOrderByAggregateInput
    _sum?: work_experiencesSumOrderByAggregateInput
  }

  export type work_experiencesScalarWhereWithAggregatesInput = {
    AND?: work_experiencesScalarWhereWithAggregatesInput | work_experiencesScalarWhereWithAggregatesInput[]
    OR?: work_experiencesScalarWhereWithAggregatesInput[]
    NOT?: work_experiencesScalarWhereWithAggregatesInput | work_experiencesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"work_experiences"> | bigint | number
    company?: StringNullableWithAggregatesFilter<"work_experiences"> | string | null
    position?: StringNullableWithAggregatesFilter<"work_experiences"> | string | null
    start_date?: StringNullableWithAggregatesFilter<"work_experiences"> | string | null
    end_date?: StringNullableWithAggregatesFilter<"work_experiences"> | string | null
    resume_id?: BigIntNullableWithAggregatesFilter<"work_experiences"> | bigint | number | null
  }

  export type WorkExperienceDescriptionPointsWhereInput = {
    AND?: WorkExperienceDescriptionPointsWhereInput | WorkExperienceDescriptionPointsWhereInput[]
    OR?: WorkExperienceDescriptionPointsWhereInput[]
    NOT?: WorkExperienceDescriptionPointsWhereInput | WorkExperienceDescriptionPointsWhereInput[]
    id?: BigIntFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    work_experience_entity_id?: BigIntFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"WorkExperienceDescriptionPoints"> | string | null
    work_experience?: XOR<Work_experiencesScalarRelationFilter, work_experiencesWhereInput>
  }

  export type WorkExperienceDescriptionPointsOrderByWithRelationInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
    description_point?: SortOrderInput | SortOrder
    work_experience?: work_experiencesOrderByWithRelationInput
  }

  export type WorkExperienceDescriptionPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WorkExperienceDescriptionPointsWhereInput | WorkExperienceDescriptionPointsWhereInput[]
    OR?: WorkExperienceDescriptionPointsWhereInput[]
    NOT?: WorkExperienceDescriptionPointsWhereInput | WorkExperienceDescriptionPointsWhereInput[]
    work_experience_entity_id?: BigIntFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"WorkExperienceDescriptionPoints"> | string | null
    work_experience?: XOR<Work_experiencesScalarRelationFilter, work_experiencesWhereInput>
  }, "id">

  export type WorkExperienceDescriptionPointsOrderByWithAggregationInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
    description_point?: SortOrderInput | SortOrder
    _count?: WorkExperienceDescriptionPointsCountOrderByAggregateInput
    _avg?: WorkExperienceDescriptionPointsAvgOrderByAggregateInput
    _max?: WorkExperienceDescriptionPointsMaxOrderByAggregateInput
    _min?: WorkExperienceDescriptionPointsMinOrderByAggregateInput
    _sum?: WorkExperienceDescriptionPointsSumOrderByAggregateInput
  }

  export type WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput | WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput | WorkExperienceDescriptionPointsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    work_experience_entity_id?: BigIntWithAggregatesFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    description_point?: StringNullableWithAggregatesFilter<"WorkExperienceDescriptionPoints"> | string | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: BigIntFilter<"projects"> | bigint | number
    title?: StringNullableFilter<"projects"> | string | null
    sub_title?: StringNullableFilter<"projects"> | string | null
    description?: StringNullableFilter<"projects"> | string | null
    media?: StringNullableFilter<"projects"> | string | null
    resume_id?: BigIntNullableFilter<"projects"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    sub_title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume?: resumesOrderByWithRelationInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    title?: StringNullableFilter<"projects"> | string | null
    sub_title?: StringNullableFilter<"projects"> | string | null
    description?: StringNullableFilter<"projects"> | string | null
    media?: StringNullableFilter<"projects"> | string | null
    resume_id?: BigIntNullableFilter<"projects"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    sub_title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"projects"> | bigint | number
    title?: StringNullableWithAggregatesFilter<"projects"> | string | null
    sub_title?: StringNullableWithAggregatesFilter<"projects"> | string | null
    description?: StringNullableWithAggregatesFilter<"projects"> | string | null
    media?: StringNullableWithAggregatesFilter<"projects"> | string | null
    resume_id?: BigIntNullableWithAggregatesFilter<"projects"> | bigint | number | null
  }

  export type media_linksWhereInput = {
    AND?: media_linksWhereInput | media_linksWhereInput[]
    OR?: media_linksWhereInput[]
    NOT?: media_linksWhereInput | media_linksWhereInput[]
    id?: BigIntFilter<"media_links"> | bigint | number
    name?: StringNullableFilter<"media_links"> | string | null
    link?: StringNullableFilter<"media_links"> | string | null
    resume_id?: BigIntNullableFilter<"media_links"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }

  export type media_linksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume?: resumesOrderByWithRelationInput
  }

  export type media_linksWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: media_linksWhereInput | media_linksWhereInput[]
    OR?: media_linksWhereInput[]
    NOT?: media_linksWhereInput | media_linksWhereInput[]
    name?: StringNullableFilter<"media_links"> | string | null
    link?: StringNullableFilter<"media_links"> | string | null
    resume_id?: BigIntNullableFilter<"media_links"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }, "id">

  export type media_linksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    _count?: media_linksCountOrderByAggregateInput
    _avg?: media_linksAvgOrderByAggregateInput
    _max?: media_linksMaxOrderByAggregateInput
    _min?: media_linksMinOrderByAggregateInput
    _sum?: media_linksSumOrderByAggregateInput
  }

  export type media_linksScalarWhereWithAggregatesInput = {
    AND?: media_linksScalarWhereWithAggregatesInput | media_linksScalarWhereWithAggregatesInput[]
    OR?: media_linksScalarWhereWithAggregatesInput[]
    NOT?: media_linksScalarWhereWithAggregatesInput | media_linksScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"media_links"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"media_links"> | string | null
    link?: StringNullableWithAggregatesFilter<"media_links"> | string | null
    resume_id?: BigIntNullableWithAggregatesFilter<"media_links"> | bigint | number | null
  }

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    id?: BigIntFilter<"skills"> | bigint | number
    name?: StringNullableFilter<"skills"> | string | null
    skill_group?: StringNullableFilter<"skills"> | string | null
    resume_id?: BigIntNullableFilter<"skills"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }

  export type skillsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    skill_group?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    resume?: resumesOrderByWithRelationInput
  }

  export type skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    name?: StringNullableFilter<"skills"> | string | null
    skill_group?: StringNullableFilter<"skills"> | string | null
    resume_id?: BigIntNullableFilter<"skills"> | bigint | number | null
    resume?: XOR<ResumesNullableScalarRelationFilter, resumesWhereInput> | null
  }, "id">

  export type skillsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    skill_group?: SortOrderInput | SortOrder
    resume_id?: SortOrderInput | SortOrder
    _count?: skillsCountOrderByAggregateInput
    _avg?: skillsAvgOrderByAggregateInput
    _max?: skillsMaxOrderByAggregateInput
    _min?: skillsMinOrderByAggregateInput
    _sum?: skillsSumOrderByAggregateInput
  }

  export type skillsScalarWhereWithAggregatesInput = {
    AND?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    OR?: skillsScalarWhereWithAggregatesInput[]
    NOT?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"skills"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"skills"> | string | null
    skill_group?: StringNullableWithAggregatesFilter<"skills"> | string | null
    resume_id?: BigIntNullableWithAggregatesFilter<"skills"> | bigint | number | null
  }

  export type job_applicationsWhereInput = {
    AND?: job_applicationsWhereInput | job_applicationsWhereInput[]
    OR?: job_applicationsWhereInput[]
    NOT?: job_applicationsWhereInput | job_applicationsWhereInput[]
    id?: BigIntFilter<"job_applications"> | bigint | number
    link?: StringNullableFilter<"job_applications"> | string | null
    contact?: StringNullableFilter<"job_applications"> | string | null
    status?: StringNullableFilter<"job_applications"> | string | null
    company?: StringNullableFilter<"job_applications"> | string | null
    role?: StringNullableFilter<"job_applications"> | string | null
    schedule?: StringNullableFilter<"job_applications"> | string | null
    description?: IntNullableFilter<"job_applications"> | number | null
    notes?: IntNullableFilter<"job_applications"> | number | null
    created_at?: DateTimeFilter<"job_applications"> | Date | string
    updated_at?: DateTimeNullableFilter<"job_applications"> | Date | string | null
  }

  export type job_applicationsOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type job_applicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: job_applicationsWhereInput | job_applicationsWhereInput[]
    OR?: job_applicationsWhereInput[]
    NOT?: job_applicationsWhereInput | job_applicationsWhereInput[]
    link?: StringNullableFilter<"job_applications"> | string | null
    contact?: StringNullableFilter<"job_applications"> | string | null
    status?: StringNullableFilter<"job_applications"> | string | null
    company?: StringNullableFilter<"job_applications"> | string | null
    role?: StringNullableFilter<"job_applications"> | string | null
    schedule?: StringNullableFilter<"job_applications"> | string | null
    description?: IntNullableFilter<"job_applications"> | number | null
    notes?: IntNullableFilter<"job_applications"> | number | null
    created_at?: DateTimeFilter<"job_applications"> | Date | string
    updated_at?: DateTimeNullableFilter<"job_applications"> | Date | string | null
  }, "id">

  export type job_applicationsOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: job_applicationsCountOrderByAggregateInput
    _avg?: job_applicationsAvgOrderByAggregateInput
    _max?: job_applicationsMaxOrderByAggregateInput
    _min?: job_applicationsMinOrderByAggregateInput
    _sum?: job_applicationsSumOrderByAggregateInput
  }

  export type job_applicationsScalarWhereWithAggregatesInput = {
    AND?: job_applicationsScalarWhereWithAggregatesInput | job_applicationsScalarWhereWithAggregatesInput[]
    OR?: job_applicationsScalarWhereWithAggregatesInput[]
    NOT?: job_applicationsScalarWhereWithAggregatesInput | job_applicationsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"job_applications"> | bigint | number
    link?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    contact?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    status?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    company?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    role?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    schedule?: StringNullableWithAggregatesFilter<"job_applications"> | string | null
    description?: IntNullableWithAggregatesFilter<"job_applications"> | number | null
    notes?: IntNullableWithAggregatesFilter<"job_applications"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"job_applications"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"job_applications"> | Date | string | null
  }

  export type usersCreateInput = {
    id?: bigint | number
    user_name: string
    email: string
    password: string
    role?: string | null
    is_active: boolean
    created_at: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    user_name: string
    email: string
    password: string
    role?: string | null
    is_active: boolean
    created_at: Date | string
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    user_name: string
    email: string
    password: string
    role?: string | null
    is_active: boolean
    created_at: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resumesCreateInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsCreateNestedManyWithoutResumeInput
    media_links?: media_linksCreateNestedManyWithoutResumeInput
    projects?: projectsCreateNestedManyWithoutResumeInput
    skills?: skillsCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsUncheckedCreateNestedManyWithoutResumeInput
    media_links?: media_linksUncheckedCreateNestedManyWithoutResumeInput
    projects?: projectsUncheckedCreateNestedManyWithoutResumeInput
    skills?: skillsUncheckedCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUpdateManyWithoutResumeNestedInput
    projects?: projectsUpdateManyWithoutResumeNestedInput
    skills?: skillsUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUncheckedUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: projectsUncheckedUpdateManyWithoutResumeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type resumesCreateManyInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type resumesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type resumesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type educationsCreateInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    resume?: resumesCreateNestedOneWithoutEducationsInput
    description_points?: EducationDescriptionPointsCreateNestedManyWithoutEducationInput
  }

  export type educationsUncheckedCreateInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
    description_points?: EducationDescriptionPointsUncheckedCreateNestedManyWithoutEducationInput
  }

  export type educationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutEducationsNestedInput
    description_points?: EducationDescriptionPointsUpdateManyWithoutEducationNestedInput
  }

  export type educationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description_points?: EducationDescriptionPointsUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type educationsCreateManyInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
  }

  export type educationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type educationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EducationDescriptionPointsCreateInput = {
    id?: bigint | number
    description_point?: string | null
    education: educationsCreateNestedOneWithoutDescription_pointsInput
  }

  export type EducationDescriptionPointsUncheckedCreateInput = {
    id?: bigint | number
    education_entity_id: bigint | number
    description_point?: string | null
  }

  export type EducationDescriptionPointsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
    education?: educationsUpdateOneRequiredWithoutDescription_pointsNestedInput
  }

  export type EducationDescriptionPointsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    education_entity_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationDescriptionPointsCreateManyInput = {
    id?: bigint | number
    education_entity_id: bigint | number
    description_point?: string | null
  }

  export type EducationDescriptionPointsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationDescriptionPointsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    education_entity_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_experiencesCreateInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    resume?: resumesCreateNestedOneWithoutWork_experiencesInput
    description_points?: WorkExperienceDescriptionPointsCreateNestedManyWithoutWork_experienceInput
  }

  export type work_experiencesUncheckedCreateInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
    description_points?: WorkExperienceDescriptionPointsUncheckedCreateNestedManyWithoutWork_experienceInput
  }

  export type work_experiencesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutWork_experiencesNestedInput
    description_points?: WorkExperienceDescriptionPointsUpdateManyWithoutWork_experienceNestedInput
  }

  export type work_experiencesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description_points?: WorkExperienceDescriptionPointsUncheckedUpdateManyWithoutWork_experienceNestedInput
  }

  export type work_experiencesCreateManyInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
  }

  export type work_experiencesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_experiencesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type WorkExperienceDescriptionPointsCreateInput = {
    id?: bigint | number
    description_point?: string | null
    work_experience: work_experiencesCreateNestedOneWithoutDescription_pointsInput
  }

  export type WorkExperienceDescriptionPointsUncheckedCreateInput = {
    id?: bigint | number
    work_experience_entity_id: bigint | number
    description_point?: string | null
  }

  export type WorkExperienceDescriptionPointsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
    work_experience?: work_experiencesUpdateOneRequiredWithoutDescription_pointsNestedInput
  }

  export type WorkExperienceDescriptionPointsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    work_experience_entity_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceDescriptionPointsCreateManyInput = {
    id?: bigint | number
    work_experience_entity_id: bigint | number
    description_point?: string | null
  }

  export type WorkExperienceDescriptionPointsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceDescriptionPointsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    work_experience_entity_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsCreateInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
    resume?: resumesCreateNestedOneWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
    resume_id?: bigint | number | null
  }

  export type projectsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type projectsCreateManyInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
    resume_id?: bigint | number | null
  }

  export type projectsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type media_linksCreateInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
    resume?: resumesCreateNestedOneWithoutMedia_linksInput
  }

  export type media_linksUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
    resume_id?: bigint | number | null
  }

  export type media_linksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutMedia_linksNestedInput
  }

  export type media_linksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type media_linksCreateManyInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
    resume_id?: bigint | number | null
  }

  export type media_linksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_linksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type skillsCreateInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
    resume?: resumesCreateNestedOneWithoutSkillsInput
  }

  export type skillsUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
    resume_id?: bigint | number | null
  }

  export type skillsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutSkillsNestedInput
  }

  export type skillsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type skillsCreateManyInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
    resume_id?: bigint | number | null
  }

  export type skillsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type job_applicationsCreateInput = {
    id?: bigint | number
    link?: string | null
    contact?: string | null
    status?: string | null
    company?: string | null
    role?: string | null
    schedule?: string | null
    description?: number | null
    notes?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type job_applicationsUncheckedCreateInput = {
    id?: bigint | number
    link?: string | null
    contact?: string | null
    status?: string | null
    company?: string | null
    role?: string | null
    schedule?: string | null
    description?: number | null
    notes?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type job_applicationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_applicationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_applicationsCreateManyInput = {
    id?: bigint | number
    link?: string | null
    contact?: string | null
    status?: string | null
    company?: string | null
    role?: string | null
    schedule?: string | null
    description?: number | null
    notes?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type job_applicationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type job_applicationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    link?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EducationsListRelationFilter = {
    every?: educationsWhereInput
    some?: educationsWhereInput
    none?: educationsWhereInput
  }

  export type Media_linksListRelationFilter = {
    every?: media_linksWhereInput
    some?: media_linksWhereInput
    none?: media_linksWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: projectsWhereInput
    some?: projectsWhereInput
    none?: projectsWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: skillsWhereInput
    some?: skillsWhereInput
    none?: skillsWhereInput
  }

  export type Work_experiencesListRelationFilter = {
    every?: work_experiencesWhereInput
    some?: work_experiencesWhereInput
    none?: work_experiencesWhereInput
  }

  export type educationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type media_linksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type work_experiencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type resumesCountOrderByAggregateInput = {
    id?: SortOrder
    resume_name?: SortOrder
    is_active?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type resumesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type resumesMaxOrderByAggregateInput = {
    id?: SortOrder
    resume_name?: SortOrder
    is_active?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type resumesMinOrderByAggregateInput = {
    id?: SortOrder
    resume_name?: SortOrder
    is_active?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type resumesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ResumesNullableScalarRelationFilter = {
    is?: resumesWhereInput | null
    isNot?: resumesWhereInput | null
  }

  export type EducationDescriptionPointsListRelationFilter = {
    every?: EducationDescriptionPointsWhereInput
    some?: EducationDescriptionPointsWhereInput
    none?: EducationDescriptionPointsWhereInput
  }

  export type EducationDescriptionPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type educationsCountOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    education_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type educationsAvgOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type educationsMaxOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    education_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type educationsMinOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    education_name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type educationsSumOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EducationsScalarRelationFilter = {
    is?: educationsWhereInput
    isNot?: educationsWhereInput
  }

  export type EducationDescriptionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type EducationDescriptionPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
  }

  export type EducationDescriptionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type EducationDescriptionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type EducationDescriptionPointsSumOrderByAggregateInput = {
    id?: SortOrder
    education_entity_id?: SortOrder
  }

  export type WorkExperienceDescriptionPointsListRelationFilter = {
    every?: WorkExperienceDescriptionPointsWhereInput
    some?: WorkExperienceDescriptionPointsWhereInput
    none?: WorkExperienceDescriptionPointsWhereInput
  }

  export type WorkExperienceDescriptionPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type work_experiencesCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type work_experiencesAvgOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type work_experiencesMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type work_experiencesMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    resume_id?: SortOrder
  }

  export type work_experiencesSumOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type Work_experiencesScalarRelationFilter = {
    is?: work_experiencesWhereInput
    isNot?: work_experiencesWhereInput
  }

  export type WorkExperienceDescriptionPointsCountOrderByAggregateInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type WorkExperienceDescriptionPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
  }

  export type WorkExperienceDescriptionPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type WorkExperienceDescriptionPointsMinOrderByAggregateInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
    description_point?: SortOrder
  }

  export type WorkExperienceDescriptionPointsSumOrderByAggregateInput = {
    id?: SortOrder
    work_experience_entity_id?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    description?: SortOrder
    media?: SortOrder
    resume_id?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    description?: SortOrder
    media?: SortOrder
    resume_id?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sub_title?: SortOrder
    description?: SortOrder
    media?: SortOrder
    resume_id?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type media_linksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    resume_id?: SortOrder
  }

  export type media_linksAvgOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type media_linksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    resume_id?: SortOrder
  }

  export type media_linksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    resume_id?: SortOrder
  }

  export type media_linksSumOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type skillsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skill_group?: SortOrder
    resume_id?: SortOrder
  }

  export type skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skill_group?: SortOrder
    resume_id?: SortOrder
  }

  export type skillsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    skill_group?: SortOrder
    resume_id?: SortOrder
  }

  export type skillsSumOrderByAggregateInput = {
    id?: SortOrder
    resume_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type job_applicationsCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    company?: SortOrder
    role?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type job_applicationsAvgOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    notes?: SortOrder
  }

  export type job_applicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    company?: SortOrder
    role?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type job_applicationsMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    contact?: SortOrder
    status?: SortOrder
    company?: SortOrder
    role?: SortOrder
    schedule?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type job_applicationsSumOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    notes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type educationsCreateNestedManyWithoutResumeInput = {
    create?: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput> | educationsCreateWithoutResumeInput[] | educationsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: educationsCreateOrConnectWithoutResumeInput | educationsCreateOrConnectWithoutResumeInput[]
    createMany?: educationsCreateManyResumeInputEnvelope
    connect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
  }

  export type media_linksCreateNestedManyWithoutResumeInput = {
    create?: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput> | media_linksCreateWithoutResumeInput[] | media_linksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: media_linksCreateOrConnectWithoutResumeInput | media_linksCreateOrConnectWithoutResumeInput[]
    createMany?: media_linksCreateManyResumeInputEnvelope
    connect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
  }

  export type projectsCreateNestedManyWithoutResumeInput = {
    create?: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput> | projectsCreateWithoutResumeInput[] | projectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutResumeInput | projectsCreateOrConnectWithoutResumeInput[]
    createMany?: projectsCreateManyResumeInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type skillsCreateNestedManyWithoutResumeInput = {
    create?: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput> | skillsCreateWithoutResumeInput[] | skillsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutResumeInput | skillsCreateOrConnectWithoutResumeInput[]
    createMany?: skillsCreateManyResumeInputEnvelope
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
  }

  export type work_experiencesCreateNestedManyWithoutResumeInput = {
    create?: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput> | work_experiencesCreateWithoutResumeInput[] | work_experiencesUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: work_experiencesCreateOrConnectWithoutResumeInput | work_experiencesCreateOrConnectWithoutResumeInput[]
    createMany?: work_experiencesCreateManyResumeInputEnvelope
    connect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
  }

  export type educationsUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput> | educationsCreateWithoutResumeInput[] | educationsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: educationsCreateOrConnectWithoutResumeInput | educationsCreateOrConnectWithoutResumeInput[]
    createMany?: educationsCreateManyResumeInputEnvelope
    connect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
  }

  export type media_linksUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput> | media_linksCreateWithoutResumeInput[] | media_linksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: media_linksCreateOrConnectWithoutResumeInput | media_linksCreateOrConnectWithoutResumeInput[]
    createMany?: media_linksCreateManyResumeInputEnvelope
    connect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
  }

  export type projectsUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput> | projectsCreateWithoutResumeInput[] | projectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutResumeInput | projectsCreateOrConnectWithoutResumeInput[]
    createMany?: projectsCreateManyResumeInputEnvelope
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
  }

  export type skillsUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput> | skillsCreateWithoutResumeInput[] | skillsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutResumeInput | skillsCreateOrConnectWithoutResumeInput[]
    createMany?: skillsCreateManyResumeInputEnvelope
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
  }

  export type work_experiencesUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput> | work_experiencesCreateWithoutResumeInput[] | work_experiencesUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: work_experiencesCreateOrConnectWithoutResumeInput | work_experiencesCreateOrConnectWithoutResumeInput[]
    createMany?: work_experiencesCreateManyResumeInputEnvelope
    connect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type educationsUpdateManyWithoutResumeNestedInput = {
    create?: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput> | educationsCreateWithoutResumeInput[] | educationsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: educationsCreateOrConnectWithoutResumeInput | educationsCreateOrConnectWithoutResumeInput[]
    upsert?: educationsUpsertWithWhereUniqueWithoutResumeInput | educationsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: educationsCreateManyResumeInputEnvelope
    set?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    disconnect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    delete?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    connect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    update?: educationsUpdateWithWhereUniqueWithoutResumeInput | educationsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: educationsUpdateManyWithWhereWithoutResumeInput | educationsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: educationsScalarWhereInput | educationsScalarWhereInput[]
  }

  export type media_linksUpdateManyWithoutResumeNestedInput = {
    create?: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput> | media_linksCreateWithoutResumeInput[] | media_linksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: media_linksCreateOrConnectWithoutResumeInput | media_linksCreateOrConnectWithoutResumeInput[]
    upsert?: media_linksUpsertWithWhereUniqueWithoutResumeInput | media_linksUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: media_linksCreateManyResumeInputEnvelope
    set?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    disconnect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    delete?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    connect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    update?: media_linksUpdateWithWhereUniqueWithoutResumeInput | media_linksUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: media_linksUpdateManyWithWhereWithoutResumeInput | media_linksUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: media_linksScalarWhereInput | media_linksScalarWhereInput[]
  }

  export type projectsUpdateManyWithoutResumeNestedInput = {
    create?: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput> | projectsCreateWithoutResumeInput[] | projectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutResumeInput | projectsCreateOrConnectWithoutResumeInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutResumeInput | projectsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: projectsCreateManyResumeInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutResumeInput | projectsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutResumeInput | projectsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type skillsUpdateManyWithoutResumeNestedInput = {
    create?: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput> | skillsCreateWithoutResumeInput[] | skillsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutResumeInput | skillsCreateOrConnectWithoutResumeInput[]
    upsert?: skillsUpsertWithWhereUniqueWithoutResumeInput | skillsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: skillsCreateManyResumeInputEnvelope
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    update?: skillsUpdateWithWhereUniqueWithoutResumeInput | skillsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: skillsUpdateManyWithWhereWithoutResumeInput | skillsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[]
  }

  export type work_experiencesUpdateManyWithoutResumeNestedInput = {
    create?: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput> | work_experiencesCreateWithoutResumeInput[] | work_experiencesUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: work_experiencesCreateOrConnectWithoutResumeInput | work_experiencesCreateOrConnectWithoutResumeInput[]
    upsert?: work_experiencesUpsertWithWhereUniqueWithoutResumeInput | work_experiencesUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: work_experiencesCreateManyResumeInputEnvelope
    set?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    disconnect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    delete?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    connect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    update?: work_experiencesUpdateWithWhereUniqueWithoutResumeInput | work_experiencesUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: work_experiencesUpdateManyWithWhereWithoutResumeInput | work_experiencesUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: work_experiencesScalarWhereInput | work_experiencesScalarWhereInput[]
  }

  export type educationsUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput> | educationsCreateWithoutResumeInput[] | educationsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: educationsCreateOrConnectWithoutResumeInput | educationsCreateOrConnectWithoutResumeInput[]
    upsert?: educationsUpsertWithWhereUniqueWithoutResumeInput | educationsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: educationsCreateManyResumeInputEnvelope
    set?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    disconnect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    delete?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    connect?: educationsWhereUniqueInput | educationsWhereUniqueInput[]
    update?: educationsUpdateWithWhereUniqueWithoutResumeInput | educationsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: educationsUpdateManyWithWhereWithoutResumeInput | educationsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: educationsScalarWhereInput | educationsScalarWhereInput[]
  }

  export type media_linksUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput> | media_linksCreateWithoutResumeInput[] | media_linksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: media_linksCreateOrConnectWithoutResumeInput | media_linksCreateOrConnectWithoutResumeInput[]
    upsert?: media_linksUpsertWithWhereUniqueWithoutResumeInput | media_linksUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: media_linksCreateManyResumeInputEnvelope
    set?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    disconnect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    delete?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    connect?: media_linksWhereUniqueInput | media_linksWhereUniqueInput[]
    update?: media_linksUpdateWithWhereUniqueWithoutResumeInput | media_linksUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: media_linksUpdateManyWithWhereWithoutResumeInput | media_linksUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: media_linksScalarWhereInput | media_linksScalarWhereInput[]
  }

  export type projectsUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput> | projectsCreateWithoutResumeInput[] | projectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: projectsCreateOrConnectWithoutResumeInput | projectsCreateOrConnectWithoutResumeInput[]
    upsert?: projectsUpsertWithWhereUniqueWithoutResumeInput | projectsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: projectsCreateManyResumeInputEnvelope
    set?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    disconnect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    delete?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    connect?: projectsWhereUniqueInput | projectsWhereUniqueInput[]
    update?: projectsUpdateWithWhereUniqueWithoutResumeInput | projectsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: projectsUpdateManyWithWhereWithoutResumeInput | projectsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: projectsScalarWhereInput | projectsScalarWhereInput[]
  }

  export type skillsUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput> | skillsCreateWithoutResumeInput[] | skillsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: skillsCreateOrConnectWithoutResumeInput | skillsCreateOrConnectWithoutResumeInput[]
    upsert?: skillsUpsertWithWhereUniqueWithoutResumeInput | skillsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: skillsCreateManyResumeInputEnvelope
    set?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    disconnect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    delete?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    connect?: skillsWhereUniqueInput | skillsWhereUniqueInput[]
    update?: skillsUpdateWithWhereUniqueWithoutResumeInput | skillsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: skillsUpdateManyWithWhereWithoutResumeInput | skillsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: skillsScalarWhereInput | skillsScalarWhereInput[]
  }

  export type work_experiencesUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput> | work_experiencesCreateWithoutResumeInput[] | work_experiencesUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: work_experiencesCreateOrConnectWithoutResumeInput | work_experiencesCreateOrConnectWithoutResumeInput[]
    upsert?: work_experiencesUpsertWithWhereUniqueWithoutResumeInput | work_experiencesUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: work_experiencesCreateManyResumeInputEnvelope
    set?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    disconnect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    delete?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    connect?: work_experiencesWhereUniqueInput | work_experiencesWhereUniqueInput[]
    update?: work_experiencesUpdateWithWhereUniqueWithoutResumeInput | work_experiencesUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: work_experiencesUpdateManyWithWhereWithoutResumeInput | work_experiencesUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: work_experiencesScalarWhereInput | work_experiencesScalarWhereInput[]
  }

  export type resumesCreateNestedOneWithoutEducationsInput = {
    create?: XOR<resumesCreateWithoutEducationsInput, resumesUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutEducationsInput
    connect?: resumesWhereUniqueInput
  }

  export type EducationDescriptionPointsCreateNestedManyWithoutEducationInput = {
    create?: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput> | EducationDescriptionPointsCreateWithoutEducationInput[] | EducationDescriptionPointsUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: EducationDescriptionPointsCreateOrConnectWithoutEducationInput | EducationDescriptionPointsCreateOrConnectWithoutEducationInput[]
    createMany?: EducationDescriptionPointsCreateManyEducationInputEnvelope
    connect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
  }

  export type EducationDescriptionPointsUncheckedCreateNestedManyWithoutEducationInput = {
    create?: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput> | EducationDescriptionPointsCreateWithoutEducationInput[] | EducationDescriptionPointsUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: EducationDescriptionPointsCreateOrConnectWithoutEducationInput | EducationDescriptionPointsCreateOrConnectWithoutEducationInput[]
    createMany?: EducationDescriptionPointsCreateManyEducationInputEnvelope
    connect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
  }

  export type resumesUpdateOneWithoutEducationsNestedInput = {
    create?: XOR<resumesCreateWithoutEducationsInput, resumesUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutEducationsInput
    upsert?: resumesUpsertWithoutEducationsInput
    disconnect?: resumesWhereInput | boolean
    delete?: resumesWhereInput | boolean
    connect?: resumesWhereUniqueInput
    update?: XOR<XOR<resumesUpdateToOneWithWhereWithoutEducationsInput, resumesUpdateWithoutEducationsInput>, resumesUncheckedUpdateWithoutEducationsInput>
  }

  export type EducationDescriptionPointsUpdateManyWithoutEducationNestedInput = {
    create?: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput> | EducationDescriptionPointsCreateWithoutEducationInput[] | EducationDescriptionPointsUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: EducationDescriptionPointsCreateOrConnectWithoutEducationInput | EducationDescriptionPointsCreateOrConnectWithoutEducationInput[]
    upsert?: EducationDescriptionPointsUpsertWithWhereUniqueWithoutEducationInput | EducationDescriptionPointsUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: EducationDescriptionPointsCreateManyEducationInputEnvelope
    set?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    disconnect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    delete?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    connect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    update?: EducationDescriptionPointsUpdateWithWhereUniqueWithoutEducationInput | EducationDescriptionPointsUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: EducationDescriptionPointsUpdateManyWithWhereWithoutEducationInput | EducationDescriptionPointsUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: EducationDescriptionPointsScalarWhereInput | EducationDescriptionPointsScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EducationDescriptionPointsUncheckedUpdateManyWithoutEducationNestedInput = {
    create?: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput> | EducationDescriptionPointsCreateWithoutEducationInput[] | EducationDescriptionPointsUncheckedCreateWithoutEducationInput[]
    connectOrCreate?: EducationDescriptionPointsCreateOrConnectWithoutEducationInput | EducationDescriptionPointsCreateOrConnectWithoutEducationInput[]
    upsert?: EducationDescriptionPointsUpsertWithWhereUniqueWithoutEducationInput | EducationDescriptionPointsUpsertWithWhereUniqueWithoutEducationInput[]
    createMany?: EducationDescriptionPointsCreateManyEducationInputEnvelope
    set?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    disconnect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    delete?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    connect?: EducationDescriptionPointsWhereUniqueInput | EducationDescriptionPointsWhereUniqueInput[]
    update?: EducationDescriptionPointsUpdateWithWhereUniqueWithoutEducationInput | EducationDescriptionPointsUpdateWithWhereUniqueWithoutEducationInput[]
    updateMany?: EducationDescriptionPointsUpdateManyWithWhereWithoutEducationInput | EducationDescriptionPointsUpdateManyWithWhereWithoutEducationInput[]
    deleteMany?: EducationDescriptionPointsScalarWhereInput | EducationDescriptionPointsScalarWhereInput[]
  }

  export type educationsCreateNestedOneWithoutDescription_pointsInput = {
    create?: XOR<educationsCreateWithoutDescription_pointsInput, educationsUncheckedCreateWithoutDescription_pointsInput>
    connectOrCreate?: educationsCreateOrConnectWithoutDescription_pointsInput
    connect?: educationsWhereUniqueInput
  }

  export type educationsUpdateOneRequiredWithoutDescription_pointsNestedInput = {
    create?: XOR<educationsCreateWithoutDescription_pointsInput, educationsUncheckedCreateWithoutDescription_pointsInput>
    connectOrCreate?: educationsCreateOrConnectWithoutDescription_pointsInput
    upsert?: educationsUpsertWithoutDescription_pointsInput
    connect?: educationsWhereUniqueInput
    update?: XOR<XOR<educationsUpdateToOneWithWhereWithoutDescription_pointsInput, educationsUpdateWithoutDescription_pointsInput>, educationsUncheckedUpdateWithoutDescription_pointsInput>
  }

  export type resumesCreateNestedOneWithoutWork_experiencesInput = {
    create?: XOR<resumesCreateWithoutWork_experiencesInput, resumesUncheckedCreateWithoutWork_experiencesInput>
    connectOrCreate?: resumesCreateOrConnectWithoutWork_experiencesInput
    connect?: resumesWhereUniqueInput
  }

  export type WorkExperienceDescriptionPointsCreateNestedManyWithoutWork_experienceInput = {
    create?: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput> | WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput[] | WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput[]
    connectOrCreate?: WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput | WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput[]
    createMany?: WorkExperienceDescriptionPointsCreateManyWork_experienceInputEnvelope
    connect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
  }

  export type WorkExperienceDescriptionPointsUncheckedCreateNestedManyWithoutWork_experienceInput = {
    create?: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput> | WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput[] | WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput[]
    connectOrCreate?: WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput | WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput[]
    createMany?: WorkExperienceDescriptionPointsCreateManyWork_experienceInputEnvelope
    connect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
  }

  export type resumesUpdateOneWithoutWork_experiencesNestedInput = {
    create?: XOR<resumesCreateWithoutWork_experiencesInput, resumesUncheckedCreateWithoutWork_experiencesInput>
    connectOrCreate?: resumesCreateOrConnectWithoutWork_experiencesInput
    upsert?: resumesUpsertWithoutWork_experiencesInput
    disconnect?: resumesWhereInput | boolean
    delete?: resumesWhereInput | boolean
    connect?: resumesWhereUniqueInput
    update?: XOR<XOR<resumesUpdateToOneWithWhereWithoutWork_experiencesInput, resumesUpdateWithoutWork_experiencesInput>, resumesUncheckedUpdateWithoutWork_experiencesInput>
  }

  export type WorkExperienceDescriptionPointsUpdateManyWithoutWork_experienceNestedInput = {
    create?: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput> | WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput[] | WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput[]
    connectOrCreate?: WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput | WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput[]
    upsert?: WorkExperienceDescriptionPointsUpsertWithWhereUniqueWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpsertWithWhereUniqueWithoutWork_experienceInput[]
    createMany?: WorkExperienceDescriptionPointsCreateManyWork_experienceInputEnvelope
    set?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    disconnect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    delete?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    connect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    update?: WorkExperienceDescriptionPointsUpdateWithWhereUniqueWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpdateWithWhereUniqueWithoutWork_experienceInput[]
    updateMany?: WorkExperienceDescriptionPointsUpdateManyWithWhereWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpdateManyWithWhereWithoutWork_experienceInput[]
    deleteMany?: WorkExperienceDescriptionPointsScalarWhereInput | WorkExperienceDescriptionPointsScalarWhereInput[]
  }

  export type WorkExperienceDescriptionPointsUncheckedUpdateManyWithoutWork_experienceNestedInput = {
    create?: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput> | WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput[] | WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput[]
    connectOrCreate?: WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput | WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput[]
    upsert?: WorkExperienceDescriptionPointsUpsertWithWhereUniqueWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpsertWithWhereUniqueWithoutWork_experienceInput[]
    createMany?: WorkExperienceDescriptionPointsCreateManyWork_experienceInputEnvelope
    set?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    disconnect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    delete?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    connect?: WorkExperienceDescriptionPointsWhereUniqueInput | WorkExperienceDescriptionPointsWhereUniqueInput[]
    update?: WorkExperienceDescriptionPointsUpdateWithWhereUniqueWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpdateWithWhereUniqueWithoutWork_experienceInput[]
    updateMany?: WorkExperienceDescriptionPointsUpdateManyWithWhereWithoutWork_experienceInput | WorkExperienceDescriptionPointsUpdateManyWithWhereWithoutWork_experienceInput[]
    deleteMany?: WorkExperienceDescriptionPointsScalarWhereInput | WorkExperienceDescriptionPointsScalarWhereInput[]
  }

  export type work_experiencesCreateNestedOneWithoutDescription_pointsInput = {
    create?: XOR<work_experiencesCreateWithoutDescription_pointsInput, work_experiencesUncheckedCreateWithoutDescription_pointsInput>
    connectOrCreate?: work_experiencesCreateOrConnectWithoutDescription_pointsInput
    connect?: work_experiencesWhereUniqueInput
  }

  export type work_experiencesUpdateOneRequiredWithoutDescription_pointsNestedInput = {
    create?: XOR<work_experiencesCreateWithoutDescription_pointsInput, work_experiencesUncheckedCreateWithoutDescription_pointsInput>
    connectOrCreate?: work_experiencesCreateOrConnectWithoutDescription_pointsInput
    upsert?: work_experiencesUpsertWithoutDescription_pointsInput
    connect?: work_experiencesWhereUniqueInput
    update?: XOR<XOR<work_experiencesUpdateToOneWithWhereWithoutDescription_pointsInput, work_experiencesUpdateWithoutDescription_pointsInput>, work_experiencesUncheckedUpdateWithoutDescription_pointsInput>
  }

  export type resumesCreateNestedOneWithoutProjectsInput = {
    create?: XOR<resumesCreateWithoutProjectsInput, resumesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutProjectsInput
    connect?: resumesWhereUniqueInput
  }

  export type resumesUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<resumesCreateWithoutProjectsInput, resumesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutProjectsInput
    upsert?: resumesUpsertWithoutProjectsInput
    disconnect?: resumesWhereInput | boolean
    delete?: resumesWhereInput | boolean
    connect?: resumesWhereUniqueInput
    update?: XOR<XOR<resumesUpdateToOneWithWhereWithoutProjectsInput, resumesUpdateWithoutProjectsInput>, resumesUncheckedUpdateWithoutProjectsInput>
  }

  export type resumesCreateNestedOneWithoutMedia_linksInput = {
    create?: XOR<resumesCreateWithoutMedia_linksInput, resumesUncheckedCreateWithoutMedia_linksInput>
    connectOrCreate?: resumesCreateOrConnectWithoutMedia_linksInput
    connect?: resumesWhereUniqueInput
  }

  export type resumesUpdateOneWithoutMedia_linksNestedInput = {
    create?: XOR<resumesCreateWithoutMedia_linksInput, resumesUncheckedCreateWithoutMedia_linksInput>
    connectOrCreate?: resumesCreateOrConnectWithoutMedia_linksInput
    upsert?: resumesUpsertWithoutMedia_linksInput
    disconnect?: resumesWhereInput | boolean
    delete?: resumesWhereInput | boolean
    connect?: resumesWhereUniqueInput
    update?: XOR<XOR<resumesUpdateToOneWithWhereWithoutMedia_linksInput, resumesUpdateWithoutMedia_linksInput>, resumesUncheckedUpdateWithoutMedia_linksInput>
  }

  export type resumesCreateNestedOneWithoutSkillsInput = {
    create?: XOR<resumesCreateWithoutSkillsInput, resumesUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutSkillsInput
    connect?: resumesWhereUniqueInput
  }

  export type resumesUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<resumesCreateWithoutSkillsInput, resumesUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: resumesCreateOrConnectWithoutSkillsInput
    upsert?: resumesUpsertWithoutSkillsInput
    disconnect?: resumesWhereInput | boolean
    delete?: resumesWhereInput | boolean
    connect?: resumesWhereUniqueInput
    update?: XOR<XOR<resumesUpdateToOneWithWhereWithoutSkillsInput, resumesUpdateWithoutSkillsInput>, resumesUncheckedUpdateWithoutSkillsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type educationsCreateWithoutResumeInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    description_points?: EducationDescriptionPointsCreateNestedManyWithoutEducationInput
  }

  export type educationsUncheckedCreateWithoutResumeInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    description_points?: EducationDescriptionPointsUncheckedCreateNestedManyWithoutEducationInput
  }

  export type educationsCreateOrConnectWithoutResumeInput = {
    where: educationsWhereUniqueInput
    create: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput>
  }

  export type educationsCreateManyResumeInputEnvelope = {
    data: educationsCreateManyResumeInput | educationsCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type media_linksCreateWithoutResumeInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
  }

  export type media_linksUncheckedCreateWithoutResumeInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
  }

  export type media_linksCreateOrConnectWithoutResumeInput = {
    where: media_linksWhereUniqueInput
    create: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput>
  }

  export type media_linksCreateManyResumeInputEnvelope = {
    data: media_linksCreateManyResumeInput | media_linksCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type projectsCreateWithoutResumeInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
  }

  export type projectsUncheckedCreateWithoutResumeInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
  }

  export type projectsCreateOrConnectWithoutResumeInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput>
  }

  export type projectsCreateManyResumeInputEnvelope = {
    data: projectsCreateManyResumeInput | projectsCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type skillsCreateWithoutResumeInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
  }

  export type skillsUncheckedCreateWithoutResumeInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
  }

  export type skillsCreateOrConnectWithoutResumeInput = {
    where: skillsWhereUniqueInput
    create: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput>
  }

  export type skillsCreateManyResumeInputEnvelope = {
    data: skillsCreateManyResumeInput | skillsCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type work_experiencesCreateWithoutResumeInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    description_points?: WorkExperienceDescriptionPointsCreateNestedManyWithoutWork_experienceInput
  }

  export type work_experiencesUncheckedCreateWithoutResumeInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    description_points?: WorkExperienceDescriptionPointsUncheckedCreateNestedManyWithoutWork_experienceInput
  }

  export type work_experiencesCreateOrConnectWithoutResumeInput = {
    where: work_experiencesWhereUniqueInput
    create: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput>
  }

  export type work_experiencesCreateManyResumeInputEnvelope = {
    data: work_experiencesCreateManyResumeInput | work_experiencesCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type educationsUpsertWithWhereUniqueWithoutResumeInput = {
    where: educationsWhereUniqueInput
    update: XOR<educationsUpdateWithoutResumeInput, educationsUncheckedUpdateWithoutResumeInput>
    create: XOR<educationsCreateWithoutResumeInput, educationsUncheckedCreateWithoutResumeInput>
  }

  export type educationsUpdateWithWhereUniqueWithoutResumeInput = {
    where: educationsWhereUniqueInput
    data: XOR<educationsUpdateWithoutResumeInput, educationsUncheckedUpdateWithoutResumeInput>
  }

  export type educationsUpdateManyWithWhereWithoutResumeInput = {
    where: educationsScalarWhereInput
    data: XOR<educationsUpdateManyMutationInput, educationsUncheckedUpdateManyWithoutResumeInput>
  }

  export type educationsScalarWhereInput = {
    AND?: educationsScalarWhereInput | educationsScalarWhereInput[]
    OR?: educationsScalarWhereInput[]
    NOT?: educationsScalarWhereInput | educationsScalarWhereInput[]
    id?: BigIntFilter<"educations"> | bigint | number
    school?: StringNullableFilter<"educations"> | string | null
    education_name?: StringNullableFilter<"educations"> | string | null
    start_date?: StringNullableFilter<"educations"> | string | null
    end_date?: StringNullableFilter<"educations"> | string | null
    resume_id?: BigIntNullableFilter<"educations"> | bigint | number | null
  }

  export type media_linksUpsertWithWhereUniqueWithoutResumeInput = {
    where: media_linksWhereUniqueInput
    update: XOR<media_linksUpdateWithoutResumeInput, media_linksUncheckedUpdateWithoutResumeInput>
    create: XOR<media_linksCreateWithoutResumeInput, media_linksUncheckedCreateWithoutResumeInput>
  }

  export type media_linksUpdateWithWhereUniqueWithoutResumeInput = {
    where: media_linksWhereUniqueInput
    data: XOR<media_linksUpdateWithoutResumeInput, media_linksUncheckedUpdateWithoutResumeInput>
  }

  export type media_linksUpdateManyWithWhereWithoutResumeInput = {
    where: media_linksScalarWhereInput
    data: XOR<media_linksUpdateManyMutationInput, media_linksUncheckedUpdateManyWithoutResumeInput>
  }

  export type media_linksScalarWhereInput = {
    AND?: media_linksScalarWhereInput | media_linksScalarWhereInput[]
    OR?: media_linksScalarWhereInput[]
    NOT?: media_linksScalarWhereInput | media_linksScalarWhereInput[]
    id?: BigIntFilter<"media_links"> | bigint | number
    name?: StringNullableFilter<"media_links"> | string | null
    link?: StringNullableFilter<"media_links"> | string | null
    resume_id?: BigIntNullableFilter<"media_links"> | bigint | number | null
  }

  export type projectsUpsertWithWhereUniqueWithoutResumeInput = {
    where: projectsWhereUniqueInput
    update: XOR<projectsUpdateWithoutResumeInput, projectsUncheckedUpdateWithoutResumeInput>
    create: XOR<projectsCreateWithoutResumeInput, projectsUncheckedCreateWithoutResumeInput>
  }

  export type projectsUpdateWithWhereUniqueWithoutResumeInput = {
    where: projectsWhereUniqueInput
    data: XOR<projectsUpdateWithoutResumeInput, projectsUncheckedUpdateWithoutResumeInput>
  }

  export type projectsUpdateManyWithWhereWithoutResumeInput = {
    where: projectsScalarWhereInput
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyWithoutResumeInput>
  }

  export type projectsScalarWhereInput = {
    AND?: projectsScalarWhereInput | projectsScalarWhereInput[]
    OR?: projectsScalarWhereInput[]
    NOT?: projectsScalarWhereInput | projectsScalarWhereInput[]
    id?: BigIntFilter<"projects"> | bigint | number
    title?: StringNullableFilter<"projects"> | string | null
    sub_title?: StringNullableFilter<"projects"> | string | null
    description?: StringNullableFilter<"projects"> | string | null
    media?: StringNullableFilter<"projects"> | string | null
    resume_id?: BigIntNullableFilter<"projects"> | bigint | number | null
  }

  export type skillsUpsertWithWhereUniqueWithoutResumeInput = {
    where: skillsWhereUniqueInput
    update: XOR<skillsUpdateWithoutResumeInput, skillsUncheckedUpdateWithoutResumeInput>
    create: XOR<skillsCreateWithoutResumeInput, skillsUncheckedCreateWithoutResumeInput>
  }

  export type skillsUpdateWithWhereUniqueWithoutResumeInput = {
    where: skillsWhereUniqueInput
    data: XOR<skillsUpdateWithoutResumeInput, skillsUncheckedUpdateWithoutResumeInput>
  }

  export type skillsUpdateManyWithWhereWithoutResumeInput = {
    where: skillsScalarWhereInput
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyWithoutResumeInput>
  }

  export type skillsScalarWhereInput = {
    AND?: skillsScalarWhereInput | skillsScalarWhereInput[]
    OR?: skillsScalarWhereInput[]
    NOT?: skillsScalarWhereInput | skillsScalarWhereInput[]
    id?: BigIntFilter<"skills"> | bigint | number
    name?: StringNullableFilter<"skills"> | string | null
    skill_group?: StringNullableFilter<"skills"> | string | null
    resume_id?: BigIntNullableFilter<"skills"> | bigint | number | null
  }

  export type work_experiencesUpsertWithWhereUniqueWithoutResumeInput = {
    where: work_experiencesWhereUniqueInput
    update: XOR<work_experiencesUpdateWithoutResumeInput, work_experiencesUncheckedUpdateWithoutResumeInput>
    create: XOR<work_experiencesCreateWithoutResumeInput, work_experiencesUncheckedCreateWithoutResumeInput>
  }

  export type work_experiencesUpdateWithWhereUniqueWithoutResumeInput = {
    where: work_experiencesWhereUniqueInput
    data: XOR<work_experiencesUpdateWithoutResumeInput, work_experiencesUncheckedUpdateWithoutResumeInput>
  }

  export type work_experiencesUpdateManyWithWhereWithoutResumeInput = {
    where: work_experiencesScalarWhereInput
    data: XOR<work_experiencesUpdateManyMutationInput, work_experiencesUncheckedUpdateManyWithoutResumeInput>
  }

  export type work_experiencesScalarWhereInput = {
    AND?: work_experiencesScalarWhereInput | work_experiencesScalarWhereInput[]
    OR?: work_experiencesScalarWhereInput[]
    NOT?: work_experiencesScalarWhereInput | work_experiencesScalarWhereInput[]
    id?: BigIntFilter<"work_experiences"> | bigint | number
    company?: StringNullableFilter<"work_experiences"> | string | null
    position?: StringNullableFilter<"work_experiences"> | string | null
    start_date?: StringNullableFilter<"work_experiences"> | string | null
    end_date?: StringNullableFilter<"work_experiences"> | string | null
    resume_id?: BigIntNullableFilter<"work_experiences"> | bigint | number | null
  }

  export type resumesCreateWithoutEducationsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    media_links?: media_linksCreateNestedManyWithoutResumeInput
    projects?: projectsCreateNestedManyWithoutResumeInput
    skills?: skillsCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateWithoutEducationsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    media_links?: media_linksUncheckedCreateNestedManyWithoutResumeInput
    projects?: projectsUncheckedCreateNestedManyWithoutResumeInput
    skills?: skillsUncheckedCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesCreateOrConnectWithoutEducationsInput = {
    where: resumesWhereUniqueInput
    create: XOR<resumesCreateWithoutEducationsInput, resumesUncheckedCreateWithoutEducationsInput>
  }

  export type EducationDescriptionPointsCreateWithoutEducationInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type EducationDescriptionPointsUncheckedCreateWithoutEducationInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type EducationDescriptionPointsCreateOrConnectWithoutEducationInput = {
    where: EducationDescriptionPointsWhereUniqueInput
    create: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput>
  }

  export type EducationDescriptionPointsCreateManyEducationInputEnvelope = {
    data: EducationDescriptionPointsCreateManyEducationInput | EducationDescriptionPointsCreateManyEducationInput[]
    skipDuplicates?: boolean
  }

  export type resumesUpsertWithoutEducationsInput = {
    update: XOR<resumesUpdateWithoutEducationsInput, resumesUncheckedUpdateWithoutEducationsInput>
    create: XOR<resumesCreateWithoutEducationsInput, resumesUncheckedCreateWithoutEducationsInput>
    where?: resumesWhereInput
  }

  export type resumesUpdateToOneWithWhereWithoutEducationsInput = {
    where?: resumesWhereInput
    data: XOR<resumesUpdateWithoutEducationsInput, resumesUncheckedUpdateWithoutEducationsInput>
  }

  export type resumesUpdateWithoutEducationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_links?: media_linksUpdateManyWithoutResumeNestedInput
    projects?: projectsUpdateManyWithoutResumeNestedInput
    skills?: skillsUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateWithoutEducationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_links?: media_linksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: projectsUncheckedUpdateManyWithoutResumeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type EducationDescriptionPointsUpsertWithWhereUniqueWithoutEducationInput = {
    where: EducationDescriptionPointsWhereUniqueInput
    update: XOR<EducationDescriptionPointsUpdateWithoutEducationInput, EducationDescriptionPointsUncheckedUpdateWithoutEducationInput>
    create: XOR<EducationDescriptionPointsCreateWithoutEducationInput, EducationDescriptionPointsUncheckedCreateWithoutEducationInput>
  }

  export type EducationDescriptionPointsUpdateWithWhereUniqueWithoutEducationInput = {
    where: EducationDescriptionPointsWhereUniqueInput
    data: XOR<EducationDescriptionPointsUpdateWithoutEducationInput, EducationDescriptionPointsUncheckedUpdateWithoutEducationInput>
  }

  export type EducationDescriptionPointsUpdateManyWithWhereWithoutEducationInput = {
    where: EducationDescriptionPointsScalarWhereInput
    data: XOR<EducationDescriptionPointsUpdateManyMutationInput, EducationDescriptionPointsUncheckedUpdateManyWithoutEducationInput>
  }

  export type EducationDescriptionPointsScalarWhereInput = {
    AND?: EducationDescriptionPointsScalarWhereInput | EducationDescriptionPointsScalarWhereInput[]
    OR?: EducationDescriptionPointsScalarWhereInput[]
    NOT?: EducationDescriptionPointsScalarWhereInput | EducationDescriptionPointsScalarWhereInput[]
    id?: BigIntFilter<"EducationDescriptionPoints"> | bigint | number
    education_entity_id?: BigIntFilter<"EducationDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"EducationDescriptionPoints"> | string | null
  }

  export type educationsCreateWithoutDescription_pointsInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    resume?: resumesCreateNestedOneWithoutEducationsInput
  }

  export type educationsUncheckedCreateWithoutDescription_pointsInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
  }

  export type educationsCreateOrConnectWithoutDescription_pointsInput = {
    where: educationsWhereUniqueInput
    create: XOR<educationsCreateWithoutDescription_pointsInput, educationsUncheckedCreateWithoutDescription_pointsInput>
  }

  export type educationsUpsertWithoutDescription_pointsInput = {
    update: XOR<educationsUpdateWithoutDescription_pointsInput, educationsUncheckedUpdateWithoutDescription_pointsInput>
    create: XOR<educationsCreateWithoutDescription_pointsInput, educationsUncheckedCreateWithoutDescription_pointsInput>
    where?: educationsWhereInput
  }

  export type educationsUpdateToOneWithWhereWithoutDescription_pointsInput = {
    where?: educationsWhereInput
    data: XOR<educationsUpdateWithoutDescription_pointsInput, educationsUncheckedUpdateWithoutDescription_pointsInput>
  }

  export type educationsUpdateWithoutDescription_pointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutEducationsNestedInput
  }

  export type educationsUncheckedUpdateWithoutDescription_pointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type resumesCreateWithoutWork_experiencesInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsCreateNestedManyWithoutResumeInput
    media_links?: media_linksCreateNestedManyWithoutResumeInput
    projects?: projectsCreateNestedManyWithoutResumeInput
    skills?: skillsCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateWithoutWork_experiencesInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsUncheckedCreateNestedManyWithoutResumeInput
    media_links?: media_linksUncheckedCreateNestedManyWithoutResumeInput
    projects?: projectsUncheckedCreateNestedManyWithoutResumeInput
    skills?: skillsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesCreateOrConnectWithoutWork_experiencesInput = {
    where: resumesWhereUniqueInput
    create: XOR<resumesCreateWithoutWork_experiencesInput, resumesUncheckedCreateWithoutWork_experiencesInput>
  }

  export type WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type WorkExperienceDescriptionPointsCreateOrConnectWithoutWork_experienceInput = {
    where: WorkExperienceDescriptionPointsWhereUniqueInput
    create: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput>
  }

  export type WorkExperienceDescriptionPointsCreateManyWork_experienceInputEnvelope = {
    data: WorkExperienceDescriptionPointsCreateManyWork_experienceInput | WorkExperienceDescriptionPointsCreateManyWork_experienceInput[]
    skipDuplicates?: boolean
  }

  export type resumesUpsertWithoutWork_experiencesInput = {
    update: XOR<resumesUpdateWithoutWork_experiencesInput, resumesUncheckedUpdateWithoutWork_experiencesInput>
    create: XOR<resumesCreateWithoutWork_experiencesInput, resumesUncheckedCreateWithoutWork_experiencesInput>
    where?: resumesWhereInput
  }

  export type resumesUpdateToOneWithWhereWithoutWork_experiencesInput = {
    where?: resumesWhereInput
    data: XOR<resumesUpdateWithoutWork_experiencesInput, resumesUncheckedUpdateWithoutWork_experiencesInput>
  }

  export type resumesUpdateWithoutWork_experiencesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUpdateManyWithoutResumeNestedInput
    projects?: projectsUpdateManyWithoutResumeNestedInput
    skills?: skillsUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateWithoutWork_experiencesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUncheckedUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: projectsUncheckedUpdateManyWithoutResumeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type WorkExperienceDescriptionPointsUpsertWithWhereUniqueWithoutWork_experienceInput = {
    where: WorkExperienceDescriptionPointsWhereUniqueInput
    update: XOR<WorkExperienceDescriptionPointsUpdateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedUpdateWithoutWork_experienceInput>
    create: XOR<WorkExperienceDescriptionPointsCreateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedCreateWithoutWork_experienceInput>
  }

  export type WorkExperienceDescriptionPointsUpdateWithWhereUniqueWithoutWork_experienceInput = {
    where: WorkExperienceDescriptionPointsWhereUniqueInput
    data: XOR<WorkExperienceDescriptionPointsUpdateWithoutWork_experienceInput, WorkExperienceDescriptionPointsUncheckedUpdateWithoutWork_experienceInput>
  }

  export type WorkExperienceDescriptionPointsUpdateManyWithWhereWithoutWork_experienceInput = {
    where: WorkExperienceDescriptionPointsScalarWhereInput
    data: XOR<WorkExperienceDescriptionPointsUpdateManyMutationInput, WorkExperienceDescriptionPointsUncheckedUpdateManyWithoutWork_experienceInput>
  }

  export type WorkExperienceDescriptionPointsScalarWhereInput = {
    AND?: WorkExperienceDescriptionPointsScalarWhereInput | WorkExperienceDescriptionPointsScalarWhereInput[]
    OR?: WorkExperienceDescriptionPointsScalarWhereInput[]
    NOT?: WorkExperienceDescriptionPointsScalarWhereInput | WorkExperienceDescriptionPointsScalarWhereInput[]
    id?: BigIntFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    work_experience_entity_id?: BigIntFilter<"WorkExperienceDescriptionPoints"> | bigint | number
    description_point?: StringNullableFilter<"WorkExperienceDescriptionPoints"> | string | null
  }

  export type work_experiencesCreateWithoutDescription_pointsInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    resume?: resumesCreateNestedOneWithoutWork_experiencesInput
  }

  export type work_experiencesUncheckedCreateWithoutDescription_pointsInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
    resume_id?: bigint | number | null
  }

  export type work_experiencesCreateOrConnectWithoutDescription_pointsInput = {
    where: work_experiencesWhereUniqueInput
    create: XOR<work_experiencesCreateWithoutDescription_pointsInput, work_experiencesUncheckedCreateWithoutDescription_pointsInput>
  }

  export type work_experiencesUpsertWithoutDescription_pointsInput = {
    update: XOR<work_experiencesUpdateWithoutDescription_pointsInput, work_experiencesUncheckedUpdateWithoutDescription_pointsInput>
    create: XOR<work_experiencesCreateWithoutDescription_pointsInput, work_experiencesUncheckedCreateWithoutDescription_pointsInput>
    where?: work_experiencesWhereInput
  }

  export type work_experiencesUpdateToOneWithWhereWithoutDescription_pointsInput = {
    where?: work_experiencesWhereInput
    data: XOR<work_experiencesUpdateWithoutDescription_pointsInput, work_experiencesUncheckedUpdateWithoutDescription_pointsInput>
  }

  export type work_experiencesUpdateWithoutDescription_pointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: resumesUpdateOneWithoutWork_experiencesNestedInput
  }

  export type work_experiencesUncheckedUpdateWithoutDescription_pointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    resume_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type resumesCreateWithoutProjectsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsCreateNestedManyWithoutResumeInput
    media_links?: media_linksCreateNestedManyWithoutResumeInput
    skills?: skillsCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateWithoutProjectsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsUncheckedCreateNestedManyWithoutResumeInput
    media_links?: media_linksUncheckedCreateNestedManyWithoutResumeInput
    skills?: skillsUncheckedCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesCreateOrConnectWithoutProjectsInput = {
    where: resumesWhereUniqueInput
    create: XOR<resumesCreateWithoutProjectsInput, resumesUncheckedCreateWithoutProjectsInput>
  }

  export type resumesUpsertWithoutProjectsInput = {
    update: XOR<resumesUpdateWithoutProjectsInput, resumesUncheckedUpdateWithoutProjectsInput>
    create: XOR<resumesCreateWithoutProjectsInput, resumesUncheckedCreateWithoutProjectsInput>
    where?: resumesWhereInput
  }

  export type resumesUpdateToOneWithWhereWithoutProjectsInput = {
    where?: resumesWhereInput
    data: XOR<resumesUpdateWithoutProjectsInput, resumesUncheckedUpdateWithoutProjectsInput>
  }

  export type resumesUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUpdateManyWithoutResumeNestedInput
    skills?: skillsUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUncheckedUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUncheckedUpdateManyWithoutResumeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type resumesCreateWithoutMedia_linksInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsCreateNestedManyWithoutResumeInput
    projects?: projectsCreateNestedManyWithoutResumeInput
    skills?: skillsCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateWithoutMedia_linksInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsUncheckedCreateNestedManyWithoutResumeInput
    projects?: projectsUncheckedCreateNestedManyWithoutResumeInput
    skills?: skillsUncheckedCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesCreateOrConnectWithoutMedia_linksInput = {
    where: resumesWhereUniqueInput
    create: XOR<resumesCreateWithoutMedia_linksInput, resumesUncheckedCreateWithoutMedia_linksInput>
  }

  export type resumesUpsertWithoutMedia_linksInput = {
    update: XOR<resumesUpdateWithoutMedia_linksInput, resumesUncheckedUpdateWithoutMedia_linksInput>
    create: XOR<resumesCreateWithoutMedia_linksInput, resumesUncheckedCreateWithoutMedia_linksInput>
    where?: resumesWhereInput
  }

  export type resumesUpdateToOneWithWhereWithoutMedia_linksInput = {
    where?: resumesWhereInput
    data: XOR<resumesUpdateWithoutMedia_linksInput, resumesUncheckedUpdateWithoutMedia_linksInput>
  }

  export type resumesUpdateWithoutMedia_linksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUpdateManyWithoutResumeNestedInput
    projects?: projectsUpdateManyWithoutResumeNestedInput
    skills?: skillsUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateWithoutMedia_linksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUncheckedUpdateManyWithoutResumeNestedInput
    projects?: projectsUncheckedUpdateManyWithoutResumeNestedInput
    skills?: skillsUncheckedUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type resumesCreateWithoutSkillsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsCreateNestedManyWithoutResumeInput
    media_links?: media_linksCreateNestedManyWithoutResumeInput
    projects?: projectsCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesCreateNestedManyWithoutResumeInput
  }

  export type resumesUncheckedCreateWithoutSkillsInput = {
    id?: bigint | number
    resume_name?: string | null
    is_active?: boolean | null
    full_name?: string | null
    email?: string | null
    phone?: string | null
    picture?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    educations?: educationsUncheckedCreateNestedManyWithoutResumeInput
    media_links?: media_linksUncheckedCreateNestedManyWithoutResumeInput
    projects?: projectsUncheckedCreateNestedManyWithoutResumeInput
    work_experiences?: work_experiencesUncheckedCreateNestedManyWithoutResumeInput
  }

  export type resumesCreateOrConnectWithoutSkillsInput = {
    where: resumesWhereUniqueInput
    create: XOR<resumesCreateWithoutSkillsInput, resumesUncheckedCreateWithoutSkillsInput>
  }

  export type resumesUpsertWithoutSkillsInput = {
    update: XOR<resumesUpdateWithoutSkillsInput, resumesUncheckedUpdateWithoutSkillsInput>
    create: XOR<resumesCreateWithoutSkillsInput, resumesUncheckedCreateWithoutSkillsInput>
    where?: resumesWhereInput
  }

  export type resumesUpdateToOneWithWhereWithoutSkillsInput = {
    where?: resumesWhereInput
    data: XOR<resumesUpdateWithoutSkillsInput, resumesUncheckedUpdateWithoutSkillsInput>
  }

  export type resumesUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUpdateManyWithoutResumeNestedInput
    projects?: projectsUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUpdateManyWithoutResumeNestedInput
  }

  export type resumesUncheckedUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    resume_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    educations?: educationsUncheckedUpdateManyWithoutResumeNestedInput
    media_links?: media_linksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: projectsUncheckedUpdateManyWithoutResumeNestedInput
    work_experiences?: work_experiencesUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type educationsCreateManyResumeInput = {
    id?: bigint | number
    school?: string | null
    education_name?: string | null
    start_date?: string | null
    end_date?: string | null
  }

  export type media_linksCreateManyResumeInput = {
    id?: bigint | number
    name?: string | null
    link?: string | null
  }

  export type projectsCreateManyResumeInput = {
    id?: bigint | number
    title?: string | null
    sub_title?: string | null
    description?: string | null
    media?: string | null
  }

  export type skillsCreateManyResumeInput = {
    id?: bigint | number
    name?: string | null
    skill_group?: string | null
  }

  export type work_experiencesCreateManyResumeInput = {
    id?: bigint | number
    company?: string | null
    position?: string | null
    start_date?: string | null
    end_date?: string | null
  }

  export type educationsUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    description_points?: EducationDescriptionPointsUpdateManyWithoutEducationNestedInput
  }

  export type educationsUncheckedUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    description_points?: EducationDescriptionPointsUncheckedUpdateManyWithoutEducationNestedInput
  }

  export type educationsUncheckedUpdateManyWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    school?: NullableStringFieldUpdateOperationsInput | string | null
    education_name?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_linksUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_linksUncheckedUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type media_linksUncheckedUpdateManyWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUncheckedUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectsUncheckedUpdateManyWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUncheckedUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUncheckedUpdateManyWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    skill_group?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_experiencesUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    description_points?: WorkExperienceDescriptionPointsUpdateManyWithoutWork_experienceNestedInput
  }

  export type work_experiencesUncheckedUpdateWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
    description_points?: WorkExperienceDescriptionPointsUncheckedUpdateManyWithoutWork_experienceNestedInput
  }

  export type work_experiencesUncheckedUpdateManyWithoutResumeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableStringFieldUpdateOperationsInput | string | null
    end_date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationDescriptionPointsCreateManyEducationInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type EducationDescriptionPointsUpdateWithoutEducationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationDescriptionPointsUncheckedUpdateWithoutEducationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationDescriptionPointsUncheckedUpdateManyWithoutEducationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceDescriptionPointsCreateManyWork_experienceInput = {
    id?: bigint | number
    description_point?: string | null
  }

  export type WorkExperienceDescriptionPointsUpdateWithoutWork_experienceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceDescriptionPointsUncheckedUpdateWithoutWork_experienceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceDescriptionPointsUncheckedUpdateManyWithoutWork_experienceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description_point?: NullableStringFieldUpdateOperationsInput | string | null
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