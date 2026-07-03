This repository contains a [JSON5 data file](./index.json5) mapping PyPI Trove classifiers beginning with `License :: ` to lists of SPDX identifiers.  There are also Node.js/npm-based tests and a script to build a standard JSON data file.

Each SPDX identifier listed represents a possible meaning of the Trove classifier.  For example, `License :: OSI Approved :: Common Public License` maps to a list containing just `CPL-1.0`, the only SPDX identifier for a license by that name.

Some Trove classifiers are broadly ambiguous.  Where SPDX has identifier multiple licenses those classifiers could refer to, they are all included in the list of corresponding SPDX identifiers.  For example, `License :: OSI Approved :: Eiffel Forum Licnense` maps to `EFL-1.0` and `ELF-2.0`.

Some Trove classifiers refer to general categories of licenses or their properties.  The data file maps these to empty lists.  Thus, `License :: DFSG Approved` and `License :: OSI Approved` both map to `[]`.  As do `License :: Freeware`, `License :: Public Domain` and the like.
