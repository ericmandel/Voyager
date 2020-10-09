guard:		FORCE
		@(echo "use 'make all' or 'make app' to build the app")

all:		FORCE
		build/mkvoyager --all

app:		FORCE
		build/mkvoyager --app

spell:		FORCE
		@(aspell -c README.md)

nocache:	FORCE
		@(rm -rf "$$HOME/Library/Application Support/Electron/Cache")

clean:		FORCE
		@($(RM) *.a *.so *.dylib *.o *.exe core core.* errs *pure* \
			foo* *~ \#* TAGS *.E a.out errors */*~ \
			gmon.out *.pg *.bak config.info config.log \
			autom4te.cache a.out.dSYM tmp/*)

FORCE:

