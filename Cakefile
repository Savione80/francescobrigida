fs     = require 'fs'
{exec} = require 'child_process'

src = 'javascript/coffee'
dest = 'javascript'
introFiles = [
  'main'
]
siteFiles = [
  'main'
]

option '-e', '--environment [ENVIRONMENT_NAME]', 'set the environment for `build`'

task 'build', 'Build single application file from source files', (options) ->
  
  env = options.environment
  appFiles = eval "#{env}Files"
  appContents = new Array remaining = appFiles.length
  
  for file, index in appFiles then do (file, index) ->
    fs.readFile "#{src}/#{env}/#{file}.coffee", 'utf8', (err, fileContents) ->
      throw err if err
      appContents[index] = fileContents
      process() if --remaining is 0
      
  process = ->
    fs.writeFile "#{dest}/#{env}.coffee", appContents.join('\n\n'), 'utf8', (err) ->
      throw err if err
      exec "coffee --compile #{dest}/#{env}.coffee", (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        fs.unlink "#{dest}/#{env}.coffee", (err) ->
          throw err if err
          console.log 'Done.'
