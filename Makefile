PHONY: github df

github:
	rm -rf docs
	git add -A
	git commit -m "update github pages"
	git push