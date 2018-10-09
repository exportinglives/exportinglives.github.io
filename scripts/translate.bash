#!/bin/bash

ENGLISH_INDEX_FILE='./dist/en/index.html'

ENGLISH_LANG='<html lang="en">'
ENGLISH_META_DESCRIPTION='<meta name="description" content="Exporting lives is a documentary film revealing the cruel reality happening in the international animal businness.">'
ENGLISH_BASE='<base href="/en/">'
ENGLISH_TITLE='<title>Exporting Lives</title>'


sed -i "/pt-br/c\ ${ENGLISH_LANG}" $ENGLISH_INDEX_FILE
sed -i "/description/c\ ${ENGLISH_META_DESCRIPTION}" $ENGLISH_INDEX_FILE
sed -i "/base/c\ ${ENGLISH_BASE}" $ENGLISH_INDEX_FILE
sed -i "/title/c\ ${ENGLISH_TITLE}" $ENGLISH_INDEX_FILE 
