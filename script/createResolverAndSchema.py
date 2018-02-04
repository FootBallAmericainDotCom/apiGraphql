import sys

def startScript(argv):
    if len(argv) < 3:
        print "error: wrong nb of arg"
        sys.exit()
    # for arg in argv:
    #     print (arg)
    # schemaFile = open("./csvjson.json", 'r')
    # print schemaFile.read()

    writeSchema = open("scriptSchema", "w")
    writeSchema.write("\n\n-- Beginning of Schema --\n\n")
    writeSchema.write("type " + argv[1] + " { \n")
    nbArg = 2
    print "Generating schema"
    while nbArg < len(argv):
        if argv[nbArg] == "Int":
            writeSchema.write(argv[nbArg])
        elif argv[nbArg] == "String":
            writeSchema.write(argv[nbArg])
        elif argv[nbArg] == "1":
            writeSchema.write("!\n")
        elif argv[nbArg] == "0":
            writeSchema.write("\n")
        else:
            writeSchema.write(" " + argv[nbArg] + ": ")
        nbArg = nbArg + 1
    writeSchema.write("}")
    writeSchema.write("\n\n-- End of Schema --\n")
    writeSchema.write("-- Beginning of Query --\n\n")
    nbArg = 2
    print "Generating query"
    writeSchema.write(argv[1].lower() + "(")
    while nbArg < len(argv):
        if argv[nbArg] == "Int":
            writeSchema.write(argv[nbArg] + ", ")
        elif argv[nbArg] == "String":
            writeSchema.write(argv[nbArg] + ", ")
        elif argv[nbArg] == "1":
            writeSchema.write("")
        elif argv[nbArg] == "0":
            writeSchema.write("")
        else:
            writeSchema.write(argv[nbArg] + ": ")
        nbArg = nbArg + 1
    writeSchema.write("): " + argv[1] + "\n")
    writeSchema.write(argv[1].lower() + "s: " + "[" + argv[1] + "]\n")
    writeSchema.write("\n\n-- End of Query --\n")
    print "Generating resolvers"
    writeSchema.write("-- Beginning of Resolver --\n\n")
    writeSchema.write(argv[1].lower() + "(_, args) {\n")
    writeSchema.write(" return " + argv[1] + ".find({ where: args })\n},\n")
    writeSchema.write(argv[1].lower() + "s() {\n return " + argv[1] + ".findAll()\n},")
    writeSchema.write("\n\n-- End of Resolver --\n")
    print "Generating connectors"
    writeSchema.write("-- Beginning of Connectors --\n\n")
    writeSchema.write("const " + argv[1] + "Model = db.define('" + argv[1].lower() + "', {\n")
    nbArg = 2
    while nbArg < len(argv):
        if argv[nbArg] == "Int":
            writeSchema.write("INTEGER },\n")
        elif argv[nbArg] == "String":
            writeSchema.write("STRING },\n")
        elif argv[nbArg] == "1":
            writeSchema.write("")
        elif argv[nbArg] == "0":
            writeSchema.write("")
        else:
            writeSchema.write(" " + argv[nbArg] + ": { type: Sequelize.")
        nbArg = nbArg + 1
    writeSchema.write("}, {\n timestamps: false,\n freezeTableName: true,\n});\n\n")
    writeSchema.write("const " + argv[1] + " = db.models."+ argv[1].lower() +";")
    writeSchema.write("\n\n-- End of Connectors --\n")



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
