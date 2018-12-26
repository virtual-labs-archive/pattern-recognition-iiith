#!/bin/bash
						
if [ ! -d "compressed_files" ]
then
	mkdir "compressed_files"
else
	rm -r "compressed_files/"
	mkdir "compressed_files"
fi
for((c=1;c<=10;c+=1))				
do		
if [ $c != 8 ] && [ $c != 9 ]			
then
	echo "Iteration: " $c
	if [ ! -d "compressed_files/"$c ]
	then
		mkdir "compressed_files/"$c
		cd "compressed_files/"$c
		mkdir "Exp"$c
		#ls
		cd ../..
	else	
		if [ $(ls -A "compressed_files/"$c) ]
		then 	
			echo "not empty, deleting your files in the location"
		fi
		rm -r "compressed_files/"$c
		mkdir "compressed_files/"$c
		cd "compressed_files/"$c
		mkdir "Exp"$c
		#ls
		cd ../..
	fi
	jar="Exp$c.jar"
	jnlp="Exp$c.jnlp"
	#echo $jnlp
	
	chmod 777 $jnlp
	chmod a+x $jar

	folder="compressed_files/$c/Exp$c/"
	#ls $folder 
	cp $jar $folder
	cp $jnlp $folder
	cp "README.txt" $folder
	cp -r "lib/" $folder
	#ls $folder
	cd "compressed_files/"$c
	if [ $c == 6 ]
	then
		#mv "Exp"$c"/lib/jfreechart-1.0.13.jar" "Exp"$c
		#mv "Exp"$c"/lib/junit.jar" "Exp"$c
		#mv "Exp"$c"/lib/jcommon-1.0.16.jar" "Exp"$c
		mv "Exp$c/lib/"* "Exp"$c
		rm -r "Exp$c/lib"
	fi
	archivename="Exp$c.tar.gz"
	archivefolder="Exp$c/"
	echo $archivefolder
	echo $archivename
	tar -zcvf $archivename $archivefolder
	#tar -zcvf "kaveri.tar.gz" "Exp"$c"/"
	zip -r "Exp$c.zip" "Exp$c/"
	cd ../..
fi
done
