# Linux Dependencies

```

sudo apt-get update

sudo apt-get install build-essential checkinstall

sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev

```

### Download Python 2.7

```
wget https://www.python.org/ftp/python/2.7.18/Python-2.7.18.tgz

sudo tar xzf Python-2.7.18.tgz

```

### Compile Python Source

```
cd Python-2.7.18

sudo ./configure --enable-optimizations

sudo make altinstall

sudo apt-get install libxtst-dev libpng++-dev

```

# Install Packages

```
npm i

npm run start

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)