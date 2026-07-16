CREATE TABLE IF NOT EXISTS analytics_events_v0
(
    `time_ms` UInt64,
    `time` DateTime64(3, 'UTC') MATERIALIZED fromUnixTimestamp64Milli(time_ms),
    `date` Date MATERIALIZED toDate(time),
    `session` String,
    `user` String,
    `ip` String,
    `user_agent` String,
    `type` LowCardinality(String),
    `page` String
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(date)
ORDER BY (date, type, page, session, time_ms);

