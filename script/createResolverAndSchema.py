import sys

def startScript(argv):
    if len(argv) < 3:
        print "error: wrong nb of arg"
        print "args: databaseName Tables..."
        sys.exit()
    for arg in argv:
        print (arg)
    schemaFile = open("./csvjson.json", 'r')
    print schemaFile.read()

    writeSchema = open("scriptSchema", "w")
    writeSchema.write("foobar2")
    writeSchema.close()
    print "ok"

startScript(sys.argv)


#load database
#read database
#find tables names
#stock table's fields properties

#------
#open schema file
#read schema file
#write at the end of schema file, personalized code lines for the table
#close the schema file
#------ ( repeat for resolvers and connectors files )

#close database
#exit script
