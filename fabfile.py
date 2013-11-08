from fabric.api import local
    
def deploy():
    local('git pull --rebase github master')
    local('git add .')
    
    print("commit comment:")
    comment = raw_input()
    local("git commit -a -m '%s'" % comment)
    
    local('git push github master') 
    
    local('heroku maintenance:on')
    
    local('git push heroku master')
    
    local('heroku maintenance:off')