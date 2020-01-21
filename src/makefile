build-dir=../build
theme=green-icon

all:patch-analytics ${theme}

patch-analytics:
	../scripts/patch-analytics.sh

green-icon:
	mkdir ${build-dir};rsync -avC --progress lab/* themes/${theme}/* ${build-dir}
clean:
	rm -rf ${build-dir}
