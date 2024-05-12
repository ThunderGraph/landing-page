
docker build -f Dockerfile.web --platform linux/amd64 -t registry.heroku.com/thundergraph-landing-page/web .
docker push registry.heroku.com/thundergraph-landing-page/web
heroku container:release web -a thundergraph-landing-page
