FROM mcr.microsoft.com/devcontainers/go:0-1-bullseye

# RUN go get -x <your-dependency-or-tool>
USER root

# postgresql client install setup
# see also https://www.postgresql.org/download/linux/ubuntu/
# Create the file repository configuration:
RUN 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
# Import the repository signing key:
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive
#    && apt-get -y install --no-install-recommends apt-transport-https ca-certificates gnupg 

# Install the latest version of PostgreSQL.
# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
RUN apt-get -y install postgresql-client

# cloud sdk install
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg  add - && apt-get update -y && apt-get install google-cloud-cli -y
# nodejs lts install
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && apt install -y nodejs


# [Optional] Uncomment the next lines to use go get to install anything else you need
USER vscode
# pnpm install
RUN curl -fsSL https://get.pnpm.io/install.sh | bash -