FROM centos
MAINTAINER cuizaiyong <cuizaiyong@bluestonehk.com>

# 定义工作目录
ENV PROJECT_DIR /home/koa_react/

# 设置端口号
ENV PORT 8206

# 创建日志目录
RUN mkdir -p ${PROJECT_DIR}log

# 复制项目
COPY app ${PROJECT_DIR}app
COPY dist.tgz ${PROJECT_DIR}
COPY package.json ${PROJECT_DIR}
COPY package-lock.json ${PROJECT_DIR}
# 设置工作目录
WORKDIR ${PROJECT_DIR}
# 解压dist.tgz
RUN tar -zxvf dist.tgz
# 安装nodejs8.9.4版本
ENV NODE_VERSION 8.9.4

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - && \
    yum -y install nodejs && \
    npm install --registry=https://registry.npm.taobao.org

# 执行项目
#CMD['npm start']

# 暴露端口
EXPOSE $PORT
