set -e 
echo Linting.. 
npm run lint 
echo Building. this may take a minute... 
npm run build 
echo Deploying.. 
git add -A 
git commit -m 'deploy' 
git push -f https://github.com/arlebedevit/Vue3List.git master