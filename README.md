# todeno-tobun

Convert Bun file to Deno file.

## Usage

```sh
./toDeno.ts <file>
```

```sh
./toBun.ts <file>
```

## Example

### To Deno

```example.ts
import { printIsBun } from "is-bun";

printIsBun();
```
```sh
./toDeno.ts example.ts
```
```

```example.ts
import { printIsBun } from "npm:is-bun";

printIsBun();

```

### To Bun

```example.ts
import { printIsBun } from "npm:is-bun";

printIsBun();
```
```sh
./toBun.ts example.ts
```
```

```example.ts
import { printIsBun } from "is-bun";

printIsBun();

```

## Authors

- Ryotaro "Justin" Kimura http://github.com/ryoppippi

## License
MIT

