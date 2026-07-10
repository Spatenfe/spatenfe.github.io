import { openSync, readSync, closeSync } from 'node:fs';
import { resolve } from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/**
 * Reads the intrinsic width/height of a PNG in `public/` at build time by
 * parsing its IHDR header (bytes 16-24: big-endian uint32 width, then height).
 *
 * @param publicPath Root-relative public asset path, e.g. `/images/projects/foo.png`.
 * @returns The dimensions, or `undefined` for missing or non-PNG files. Never throws.
 */
export function getPngSize(publicPath: string): { width: number; height: number } | undefined {
  if (!publicPath || !publicPath.toLowerCase().endsWith('.png')) return undefined;

  const filePath = resolve(process.cwd(), 'public', publicPath.replace(/^\//, ''));
  let fd: number | undefined;
  try {
    fd = openSync(filePath, 'r');
    const header = Buffer.alloc(24);
    const bytesRead = readSync(fd, header, 0, 24, 0);
    if (bytesRead < 24) return undefined;
    if (!header.subarray(0, 8).equals(PNG_SIGNATURE)) return undefined;

    const width = header.readUInt32BE(16);
    const height = header.readUInt32BE(20);
    if (!width || !height) return undefined;
    return { width, height };
  } catch {
    return undefined;
  } finally {
    if (fd !== undefined) closeSync(fd);
  }
}
