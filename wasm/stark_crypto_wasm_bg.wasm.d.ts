/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const sign: (a: number, b: number, c: number, d: number) => [number, number];
export const pedersen_hash: (a: number, b: number, c: number, d: number) => [number, number];
export const generate_keypair_from_eth_signature: (a: number, b: number) => [number, number];
export const get_order_msg_hash: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: bigint, o: bigint, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number) => [number, number];
export const get_transfer_msg_hash: (a: bigint, b: bigint, c: number, d: number, e: bigint, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number) => [number, number];
export const get_withdrawal_msg_hash: (a: number, b: number, c: bigint, d: number, e: number, f: bigint, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number) => [number, number];
export const main: () => void;
export const init: () => void;
export const __wbindgen_externrefs: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __externref_drop_slice: (a: number, b: number) => void;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
