CREATE TABLE IF NOT EXISTS analytics_events_v0
(
    `time` DateTime64(3, 'UTC'),
    `session` LowCardinality(String),
    `user` LowCardinality(String),
    `ip` LowCardinality(String),
    `user_agent` LowCardinality(String),
    `type` LowCardinality(String),
    `page` LowCardinality(String)
)
ENGINE = MergeTree
PARTITION BY toYYYYMM(date)
ORDER BY (date, type, page, session, time_ms);

