# TI1506 - Web and Database Technology

## Setup instructions
1. Download and install Vagrant
2. Download and install VirtualBox
3. Run `git clone git@github.com:Steptro/web-and-database-technology.git`
4. Run `vagrant up`
5. Access project at `http://192.168.33.10/`

## Basic Vagrant Commands

### Start or resume your server
```bash
vagrant up
```

### Pause your server
```bash
vagrant suspend
```

### Delete your server
```bash
vagrant destroy
```

### SSH into your server
```bash
vagrant ssh
```

## SSH Access

- Hostname: 127.0.0.1:2222
- Username: vagrant
- Password: vagrant

## Database Access

### MySQL 

- Hostname: localhost or 127.0.0.1
- Username: root
- Password: root
- Database: scotchbox

More information found at https://github.com/scotch-io/scotch-box