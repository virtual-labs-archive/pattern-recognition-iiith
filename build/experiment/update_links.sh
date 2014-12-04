#!/bin/bash

for((c=1;c<=10;c+=1))
do
if [ $c != 8 ] && [ $c != 9 ]
then
	echo $c
	sed -i '/jnlp/c\             <a href="../experiment/compressed_files/'$c'/Exp'$c'.tar.gz">   Click here to open the Experiment for Linux systems</a>\n             </p>\n             <p>\n             <a href="../experiment/compressed_files/'$c'/Exp'$c'.zip">   Click here to open the Experiment for Windows</a>' ../exp$c/content.html
fi
done
