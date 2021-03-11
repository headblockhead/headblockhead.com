build:
	npm run-script build
deploy:
	npm run-script build
	aws s3 sync ./build s3://headblockhead.com
