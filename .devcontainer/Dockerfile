FROM mcr.microsoft.com/devcontainers/go:0-1-bullseye

# RUN go get -x <your-dependency-or-tool>
USER root


# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive
#    && apt-get -y install --no-install-recommends apt-transport-https ca-certificates gnupg 

# cloud sdk install
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg  add - && apt-get update -y && apt-get install google-cloud-cli -y

# [Optional] Uncomment the next lines to use go get to install anything else you need
USER vscode
# pnpm install
RUN curl -fsSL https://get.pnpm.io/install.sh | bash -