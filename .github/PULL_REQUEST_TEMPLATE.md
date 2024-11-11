# Description
[Jira issue](https://washuartsci.atlassian.net/browse/<REPLACE_WITH_ISSUE_NUMBER>)

<PLEASE_REPLACE_WITH_YOUR_DESCRIPTION>

## Dev Guide
this will be deployed to sites listed in [sites.php](https://github.com/artsci-webteam/deps/blob/main/web/sites/sites.php) for artscidev.wustl.edu, artscistage.wustl.edu and artsciprod.wustl.edu servers

- [ ] I have ran ddev sync with latest code and it ran successfully
- [ ] I have made corresponding changes to the documentation

## Testing Information information

```bash
# Sync Department Sites Environment
ddev sync stage olympian
```
<details>
<summary>Settings.php site splits</summary>

```bash
$config['config_split.config_split.local']['status'] = TRUE;
```
</details>

- [ ] Navigate to [https://default.ddev.site/](https://default.ddev.site/)
- [ ] Test steps (use specific /paths when available)

## Once PR steps are Approved - Next Steps on the Server
<details>
<summary>Helpful to run for both DEV and STAGE to keep environments NSYNC</summary>

- [ ] deploy to dev
```bash
ssh -i ~/.ssh/id_rsa yourname@artscidev.wustl.edu
sudo su - drupaladm
cd d9main
git pull
composer install
vendor/bin/blt amr
```

- [ ] deploy to stage
```bash
ssh -i ~/.ssh/id_rsa yourname@artscistage.wustl.edu
sudo su - drupaladm
cd d9main
git pull
composer install
vendor/bin/blt amr
```

- [ ] Add testing criteria to Jira ticket for final QA before PROD release.
</details>